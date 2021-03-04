import React, { SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { typeInput } from 'constants/types';
import useGetClickOutside from 'hooks/useGetClickOutside';
import Tooltips from 'components/Tooltips';

const InputField = (props: any) => {
  const {
    form,
    field,
    maxLength,
    placeholder,
    type,
    label,
    disabled,
    value,
    onChangeCustomize,
    onKeyDown,
    style,
    invalid,
    className,
    classNameLabel,
    required,

    messageToolTip,
    placementTooltip = 'left',
  } = props;

  //! State
  const ref = useRef<any>(null);
  const refContainer = useRef<any>();
  const { name } = field;
  const { errors, touched } = form;
  const [isFocus, setFocus] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // setFocus(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useGetClickOutside(refContainer, () => {
    setFocus(false);
  });

  useEffect(() => {
    //* Auto focus next input when user fill prev input
    if (type === typeInput.CMND) {
      const container: any = document.getElementById(name);
      container.onkeyup = function (e: any) {
        let target = e.srcElement || e.target;
        let maxLength = parseInt(target.attributes['maxlength'].value, 10);
        let myLength = target.value.length;
        if (myLength >= maxLength) {
          let next = target;
          while ((next = next.nextElementSibling)) {
            if (next == null) break;
            if (next.tagName.toLowerCase() === 'input') {
              next.focus();
              break;
            }
          }
        }
        // Move to previous field if empty (user pressed backspace)
        else if (myLength === 0) {
          let previous = target;
          while ((previous = previous.previousElementSibling)) {
            if (previous == null) break;
            if (previous.tagName.toLowerCase() === 'input') {
              previous.focus();
              break;
            }
          }
        }
      };
    }
  }, [name, type]);

  //! Function
  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const onBlur = useCallback(
    (e) => {
      field.onBlur(e);
    },
    [field],
  );

  const onKeyDownFunc = (e: any) => {
    //* User press tab button on keyboard
    if (e.keyCode === 9) {
      setFocus(false);
    }
    onKeyDown && onKeyDown(e);
  };

  //! Render
  const renderInput = () => {
    return (
      <Input
        {...field}
        innerRef={ref}
        onClick={onFocus}
        onBlur={onBlur}
        onFocus={onFocus}
        style={style}
        className={`${className} px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow focus:shadow-outline w-full`}
        onChange={onChangeCustomize || field.onChange}
        type={type}
        id={name}
        maxLength={maxLength}
        value={value || field.value}
        placeholder={placeholder}
        disabled={disabled}
        invalid={invalid || (!!errors[name] && touched[name])}
        onKeyDown={onKeyDownFunc}
        autoComplete="off"
      />
    );
  };

  return (
    <FormGroup>
      {label && (
        <Label
          className={classNameLabel}
          htmlFor={name}
          dangerouslySetInnerHTML={{
            __html: required ? `${label}<span style="color: red; padding-left: 4px">*</span>` : label,
          }}
        />
      )}

      <div style={{ width: '100%', position: 'relative' }} ref={refContainer}>
        {renderInput()}
        <Tooltips
          isOpen={isFocus && messageToolTip}
          placementTooltip={placementTooltip}
          messageToolTip={messageToolTip}
        />
        {errors[name] && touched[name] && typeof errors[name] === 'string' && (
          <FormFeedback>{errors[name]}</FormFeedback>
        )}
      </div>
    </FormGroup>
  );
};

InputField.defaultProps = {
  type: 'text',
  tabIndex: '0',
  invalid: false,
};

export default InputField;
