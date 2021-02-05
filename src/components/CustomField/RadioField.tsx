import React, { Fragment } from 'react';
import { Input, FormFeedback, Label, FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import { FormikProps, FormikValues } from 'formik';

interface RadioFieldI {
  form: FormikProps<FormikValues>;
  field: any;
  label?: string;
  disabled?: boolean;
  onChangeCustomize: () => void;
  style?: {
    [key: string]: any;
  };
  valueRadio: any;
  id: string;
  classNameLabel?: string;
}

const RadioField: React.FC<RadioFieldI> = (props) => {
  const { form, field, label, disabled, onChangeCustomize, style, valueRadio, id, classNameLabel } = props;
  const { name, value } = field;
  const { errors, touched } = form;

  if (label) {
    return (
      <FormGroup check>
        <Label className={`${classNameLabel}`}>
          <Input
            {...field}
            type="radio"
            style={style}
            onChange={onChangeCustomize || field.onChange}
            className="checkbox-form-relative"
            id={id || name}
            value={valueRadio}
            checked={value == valueRadio}
            disabled={disabled}
            invalid={!!errors[name] && touched[name]}
          />
          {label}
        </Label>
      </FormGroup>
    );
  }
  return (
    <Fragment>
      <Input
        {...field}
        type="radio"
        style={style}
        onChange={onChangeCustomize || field.onChange}
        className="checkbox-form-relative"
        id={id || name}
        value={valueRadio}
        checked={value == valueRadio}
        disabled={disabled}
        invalid={!!errors[name] && touched[name]}
      />
      {touched[name] && errors[name] && <FormFeedback>{errors[name]}</FormFeedback>}
    </Fragment>
  );
};
export default RadioField;
