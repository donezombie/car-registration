import React, { useCallback, useEffect, useState } from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import Tooltip from 'components/Tooltips';
import { TOTAL_CHAR_HO_CHIEU, typeInput } from 'constants/types';
import { generatorInput } from 'helpers';

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
    placementTooltip,
  } = props;

  //! State
  const { name } = field;
  const { errors, touched } = form;
  const [isFocus, setFocus] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFocus(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      setFocus(false);
      field.onBlur(e);
    },
    [field],
  );

  //! Render
  const renderInput = () => {
    if (type === typeInput.CMND) {
      return (
        <div id={name} className="container-input" onClick={onFocus} onFocus={onFocus} onBlur={onBlur}>
          {generatorInput(TOTAL_CHAR_HO_CHIEU).map((el, index) => (
            <Input
              key={`${index}`}
              {...field}
              // onClick={onFocus}
              // onBlur={onBlur}
              // onFocus={onFocus}
              style={style}
              className={`${className} px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow focus:shadow-outline w-full`}
              onChange={onChangeCustomize ? (e) => onChangeCustomize(e, index, TOTAL_CHAR_HO_CHIEU) : field.onChange}
              type={type}
              maxLength={maxLength}
              value={value}
              placeholder={placeholder}
              disabled={disabled}
              invalid={invalid || (!!errors[name] && touched[name])}
              onKeyDown={onKeyDown}
              autoComplete="off"
            />
          ))}
        </div>
      );
    }

    return (
      <Input
        {...field}
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
        onKeyDown={onKeyDown}
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
      {messageToolTip && (
        <Tooltip
          isOpen={isFocus}
          target={name}
          messageToolTip={messageToolTip}
          placement={placementTooltip}
          style={{ width: '100%' }}
        />
      )}
      <div style={{ width: '100%' }}>
        {renderInput()}
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
