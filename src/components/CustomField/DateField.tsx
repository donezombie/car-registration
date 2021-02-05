import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Tooltip from 'components/Tooltips';
import DatePicker, { registerLocale } from 'react-datepicker';
import vi from 'date-fns/locale/vi';
import useGetClickOutside from 'hooks/useGetClickOutside';

registerLocale('vi', vi);

const DateField = (props: any) => {
  const {
    form,
    field,
    label,
    classNameLabel,

    messageToolTip,
    placementTooltip,
    required,
  } = props;

  //! State
  const datePickerRef = useRef(null);
  const { name } = field;
  const { errors, touched } = form;
  const [isFocus, setFocus] = useState(false);

  useGetClickOutside(datePickerRef, () => {
    setFocus(false);
  });

  useEffect(() => {
    const handleScroll = () => {
      setFocus(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const onChangeDate = useCallback(
    (date) => {
      form.setFieldValue(name, date);
    },
    [form, name],
  );

  //! Render
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
          className="tooltip"
        />
      )}
      <div style={{ width: '100%' }}>
        <DatePicker
          ref={datePickerRef}
          name={name}
          id={name}
          onFocus={onFocus}
          onBlur={onBlur}
          className={`${
            errors[name] && touched[name] && typeof errors[name] === 'string' ? 'is-invalid' : ''
          } placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow focus:shadow-outline w-full form-control`}
          dateFormat="dd/MM/yyyy"
          selected={field.value}
          placeholderText={'dd/MM/yyyy'}
          onChange={onChangeDate}
          locale="vi"
          autoComplete="off"
        />
        {errors[name] && touched[name] && typeof errors[name] === 'string' && (
          <FormFeedback style={{ display: 'block' }}>{errors[name]}</FormFeedback>
        )}
      </div>
    </FormGroup>
  );
};

DateField.defaultProps = {
  type: 'text',
  tabIndex: '0',
  invalid: false,
};

export default DateField;
