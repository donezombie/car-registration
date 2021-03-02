import React, { Fragment, useCallback, useRef, useState } from 'react';
import { FormFeedback } from 'reactstrap';
import CreatableSelect from 'react-select/creatable';
import classNames from 'classnames';
import Select from 'react-select';
import { FormikProps, FormikValues } from 'formik';
import useGetClickOutside from 'hooks/useGetClickOutside';
import Tooltips from 'components/Tooltips';

const stylesForRemove = {
  multiValue: (base: any, state: any) => {
    return state.data.isFixed ? { ...base, backgroundColor: 'gray' } : base;
  },
  multiValueLabel: (base: any, state: any) => {
    return state.data.isFixed ? { ...base, fontWeight: 'bold', color: 'white', paddingRight: 6 } : base;
  },
  multiValueRemove: (base: any, state: any) => {
    return state.data.isFixed ? { ...base, display: 'none' } : base;
  },

  control: (styles: any) => ({ ...styles, borderColor: '#e4e7ea' }),
};

interface SelectFieldI {
  form: FormikProps<FormikValues>;
  field: any;
  placeholder?: string;
  label?: string;
  options?: any[];
  cachedOptions?: any[];
  isLabelComponent?: boolean;
  isCreatable?: boolean;
  isClearable?: boolean;
  isRtl?: boolean;
  isSearchabl?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  getOptionLabel?: (option: any) => string;
  getOptionValue?: (option: any) => string;

  onKeyDown?: void;
  onInputChange?: void;
  menuPortalTarget?: HTMLElement;
  errorField?: string;

  noOptionsMessage?: string;
  afterOnChange?: (arg: any) => void;
  styles?: object;
  required?: boolean;
  messageToolTip?: any;
  placementTooltip?:
    | 'auto-start'
    | 'auto'
    | 'auto-end'
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-end'
    | 'bottom'
    | 'bottom-start'
    | 'left-end'
    | 'left'
    | 'left-start';
}

const SelectField: React.FC<SelectFieldI> = (props) => {
  const {
    form,
    field,
    placeholder,
    label,
    options,

    // Use for case you want options selected will not display in other selection
    cachedOptions,

    isLabelComponent,
    isCreatable,
    isClearable,
    isRtl,
    isSearchable,
    isDisabled,
    isLoading,
    isMulti,

    getOptionLabel,
    getOptionValue,

    onKeyDown,
    onInputChange,

    menuPortalTarget,
    errorField,

    noOptionsMessage,
    afterOnChange,
    styles = {},
    required,
    messageToolTip,
    placementTooltip,
  } = props;
  const ref = useRef(null);
  const refContainer = useRef<any>(null);
  const { name, value } = field;
  const { errors, touched, setFieldValue, setFieldTouched } = form;
  const [isFocus, setFocus] = useState(false);

  let selectOption = value;

  if (cachedOptions) {
    if (cachedOptions.find((option) => option.value === value)) {
      selectOption = cachedOptions.find((option) => option.value === value);
    }
  } else {
    if (options && options.find((option) => option.value === value)) {
      selectOption = options.find((option) => option.value === value);
    }
  }

  if (isMulti) {
    if (value) {
      /** value in multi mode: 'abc, xyz, jqk'
       * split to array of string => ['abc', 'xyz', 'jqk']
       */
      const valueSplit = value.split(',').map((el: string) => el.toString());

      /** Filter if split array includes value of option
       * E.g:
       * options = [
       *  {
       *    label: 'abc',
       *    value: 'abc
       *  }
       * ]
       *
       * valueSplit = ['abc'];
       *
       */
      selectOption = options && options.filter((o) => valueSplit.includes(o.value.toString()));
    }
  }

  const renderError = useCallback(() => {
    if (errorField) {
      return <FormFeedback style={{ display: 'block' }}>{errorField}</FormFeedback>;
    }

    if (touched[name] && !!errors[name]) {
      return <FormFeedback style={{ display: 'block' }}>{errors[name]}</FormFeedback>;
    }
  }, [touched, errors, errorField]);

  const handleSelectChange = (selectedValue: any) => {
    if (selectedValue.__isNew__) {
      setFieldValue(name, selectedValue);
      afterOnChange && afterOnChange(selectedValue);
    } else {
      setFieldValue(name, selectedValue.value);
      afterOnChange && afterOnChange(selectedValue.value);
    }
  };

  const handleSelectChangeMulti = (listValue: any[], { action, removedValue }: { action: any; removedValue: any }) => {
    let valueSelect: any[] | string | undefined = '';
    switch (action) {
      case 'remove-value':
      case 'pop-value':
        if (removedValue && removedValue.isFixed) {
          return;
        }
        break;
      case 'clear':
        valueSelect = options && options.filter((v) => v.isFixed);
        setFieldValue(name, valueSelect && valueSelect.map((el) => el.value).join(','));
        afterOnChange && afterOnChange((valueSelect && valueSelect.map((el) => el.value).join(',')) || '');
        return;
    }

    if (listValue) {
      const mapValue = listValue.map((el) => el.value);
      const mapJoin = mapValue.join(',');
      setFieldValue(name, mapJoin);
      afterOnChange && afterOnChange(mapJoin || '');
    } else {
      setFieldValue(name, '');
      afterOnChange && afterOnChange('');
    }
  };

  const handleBlur = () => {
    setFieldTouched(name, true);
    setFocus(false);
  };

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);

  if (isCreatable) {
    return (
      <Fragment>
        {label && <label dangerouslySetInnerHTML={{ __html: label }} />}
        <CreatableSelect
          {...field}
          id={name}
          className={classNames('element', { 'is-invalid-input-select': touched[name] && !!errors[name] })}
          onChange={handleSelectChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          isClearable={isClearable}
          isLoading={isLoading}
          options={options}
          value={selectOption}
          menuPortalTarget={menuPortalTarget}
          classNamePrefix="react-select"
        />
        {renderError()}
      </Fragment>
    );
  }

  return (
    <Fragment>
      {isLabelComponent && label}
      {!isLabelComponent && label && (
        <label
          dangerouslySetInnerHTML={{
            __html: required ? `${label}<span style="color: red; padding-left: 4px">*</span>` : label,
          }}
        />
      )}
      <div style={{ width: '100%', position: 'relative' }} ref={refContainer}>
        <Tooltips
          isOpen={isFocus && messageToolTip}
          placementTooltip={placementTooltip}
          messageToolTip={messageToolTip}
        />
        <Select
          {...field}
          id={name}
          ref={ref}
          className={classNames({ 'is-invalid-input-select': errorField || (touched[name] && !!errors[name]) })}
          onChange={isMulti ? handleSelectChangeMulti : handleSelectChange}
          onBlur={handleBlur}
          onMenuOpen={onFocus}
          onMenuClose={handleBlur}
          placeholder={placeholder}
          options={options}
          value={selectOption}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isMulti={isMulti}
          onKeyDown={onKeyDown}
          onInputChange={onInputChange}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
          menuPortalTarget={menuPortalTarget}
          styles={{ ...styles, ...stylesForRemove }}
          noOptionsMessage={noOptionsMessage}
          classNamePrefix="react-select"
        />
        {renderError()}
      </div>
    </Fragment>
  );
};

export default SelectField;
