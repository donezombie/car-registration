import React, { Fragment } from 'react';
import { FastField } from 'formik';
import InputField from 'components/CustomField/InputField';
import { useTranslation } from 'react-i18next';

const FormSoMay = () => {
  //! State
  const { t } = useTranslation();

  //! Function

  //! Render
  return (
    <Fragment>
      <FastField
        component={InputField}
        label={t('label:so_may_1')}
        name="soMay1"
        placeholder={t('placeholder:so_may_1')}
      />
      <FastField
        component={InputField}
        label={t('label:so_may_2')}
        name="soMay2"
        placeholder={t('placeholder:so_may_2')}
      />
      <FastField
        component={InputField}
        label={t('label:so_khung')}
        name="soKhung"
        placeholder={t('placeholder:so_khung')}
      />
    </Fragment>
  );
};
export default React.memo(FormSoMay);
