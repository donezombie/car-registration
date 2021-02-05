import React, { Fragment } from 'react';
import { FastField } from 'formik';
import InputField from 'components/CustomField/InputField';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import RadioField from 'components/CustomField/RadioField';
import { TypeDangKyXe } from 'constants/types';
import CheckBoxField from 'components/CustomField/CheckBoxField';

const FormSoMay = (propsFormik: any) => {
  //! State
  const { t } = useTranslation();

  //! Function

  //! Render
  return (
    <Fragment>
      <Row>
        <Col xs="12" md="3">
          <FastField
            component={InputField}
            label={t('label:loai_xe')}
            name="loaiXe"
            placeholder={t('placeholder:loai_xe')}
          />
        </Col>
        <Col xs="12" md="3">
          <FastField
            component={InputField}
            label={t('label:mau_son')}
            name="mauSon"
            placeholder={t('placeholder:mau_son')}
          />
        </Col>
        <Col xs="12" md="3">
          <FastField
            component={InputField}
            label={t('label:nhan_hieu')}
            name="nhanHieu"
            placeholder={t('placeholder:nhan_hieu')}
          />
        </Col>
        <Col xs="12" md="3">
          <FastField
            component={InputField}
            label={t('label:so_loai')}
            name="soLoai"
            placeholder={t('placeholder:so_loai')}
          />
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="4">
          <FastField
            component={RadioField}
            label={<strong>{t('label:dang_ky_moi')}</strong>}
            name="dangKy"
            valueRadio={TypeDangKyXe.dangKyXeMoi}
          />
        </Col>
        <Col xs="12" md="4">
          <FastField
            component={RadioField}
            label={<strong>{t('label:dang_ky_sang_ten')}</strong>}
            name="dangKy"
            valueRadio={TypeDangKyXe.dangKySangTen}
          />
        </Col>
        <Col xs="12" md="4">
          <FastField
            component={RadioField}
            label={<strong>{t('label:dang_ky_tam_thoi')}</strong>}
            name="dangKy"
            valueRadio={TypeDangKyXe.dangKyTamThoi}
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" md="4">
          <FastField
            component={CheckBoxField}
            label={<strong>{t('label:doi_lai_cap_lai_dang_ky_xe')}</strong>}
            name="capLaiDangKyXe"
          />
        </Col>
        <Col xs="12" md="8">
          <FastField
            component={InputField}
            type="textarea"
            name="lyDoCapLaiDangKyXe"
            placeholder={t('placeholder:ly_do_cap_lai_dang_ky_xe')}
          />
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="4">
          <FastField
            component={CheckBoxField}
            label={<strong>{t('label:doi_lai_cap_lai_bien_so_xe')}</strong>}
            name="capLaiBienSoXe"
          />
        </Col>
        <Col xs="12" md="8">
          <FastField
            component={InputField}
            type="textarea"
            name="lyDoCapLaiBienSoXe"
            placeholder={t('placeholder:ly_do_cap_lai_bien_so_xe')}
          />
        </Col>
      </Row>
    </Fragment>
  );
};
export default React.memo(FormSoMay);
