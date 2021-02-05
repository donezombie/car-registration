import { FormikProps, FormikValues } from 'formik';
import React, { Fragment } from 'react';
import { Input, FormFeedback, Label, FormGroup } from 'reactstrap';

interface CheckBoxFieldI {
  form: FormikProps<FormikValues>;
  field: any;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  onChangeCustomize?: (arg: any) => void;
  style?: {
    [key: string]: any;
  };
}

const CheckBoxField: React.FC<CheckBoxFieldI> = (props) => {
  const { form, field, placeholder, label, disabled, onChangeCustomize, style } = props;
  const { name, value } = field;
  const { errors, touched } = form;

  return (
    <Fragment>
      <FormGroup check>
        <Label>
          <Input
            {...field}
            style={style}
            onChange={onChangeCustomize || field.onChange}
            className="checkbox-form-relative"
            type="checkbox"
            id={name}
            value={value}
            checked={typeof value === 'string' ? value === 'true' : value}
            placeholder={placeholder}
            disabled={disabled}
            invalid={!!errors[name] && touched[name]}
          />
          {label}
          {touched[name] && errors[name] && <FormFeedback>{errors[name]}</FormFeedback>}
        </Label>
      </FormGroup>
    </Fragment>
  );
};

export default CheckBoxField;
