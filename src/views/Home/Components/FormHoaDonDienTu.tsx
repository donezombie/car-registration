import React, { Fragment } from 'react';
import { FastField } from 'formik';
import InputField from 'components/CustomField/InputField';
import { Col, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import DateField from 'components/CustomField/DateField';

const FormChuXe = () => {
  //! State
  const { t } = useTranslation();

  //! Function

  //! Render
  return (
    <Fragment>
      <FastField
        component={InputField}
        label={t('label:so_hoa_don_dien_tu')}
        name="soHoaDonDienTu"
        placeholder={t('placeholder:so_hoa_don_dien_tu')}
      />
      <FastField
        component={InputField}
        label={t('label:ma_so_thue')}
        name="maSoThue"
        placeholder={t('placeholder:ma_so_thue')}
      />

      <Row>
        <Col xs="12" md="6">
          <FastField
            component={InputField}
            label={t('label:ma_ho_so_khai_le_phi_truoc_ba')}
            name="maHoSoKhaiLePhiTruocBa"
            placeholder={t('placeholder:ma_ho_so_khai_le_phi_truoc_ba')}
          />
        </Col>
        <Col xs="12" md="6">
          <FastField
            component={InputField}
            label={t('label:co_quan_cap')}
            name="coQuanCapMaHoSoKhaiLePhiTruocBa"
            placeholder={t('placeholder:co_quan_cap')}
          />
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="6">
          <FastField
            component={InputField}
            label={t('label:so_to_khai_hai_quan_dien_tu')}
            name="soToKhaiHaiQuanDienTu"
            placeholder={t('placeholder:so_to_khai_hai_quan_dien_tu')}
          />
        </Col>
        <Col xs="12" md="6">
          <FastField
            component={InputField}
            label={t('label:co_quan_cap')}
            name="coQuanCapToKhaiHaiQuanDienTu"
            placeholder={t('placeholder:co_quan_cap')}
          />
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="6">
          <FastField
            component={InputField}
            label={t('label:so_seri_phieu_ktclxx')}
            name="seriPhieuKTCLXX"
            placeholder={t('placeholder:so_seri_phieu_ktclxx')}
          />
        </Col>
        <Col xs="12" md="6">
          <FastField
            component={InputField}
            label={t('label:co_quan_cap')}
            name="coQuanCapPhieuKTCLXX"
            placeholder={t('placeholder:co_quan_cap')}
          />
        </Col>
      </Row>

      <Row>
        <Col xs="12" md="4">
          <FastField
            component={InputField}
            label={t('label:so_giay_phep_kinh_doanh_van_tai')}
            name="soGiayPhepKinhDoanhVanTai"
            placeholder={t('placeholder:so_giay_phep_kinh_doanh_van_tai')}
          />
        </Col>
        <Col xs="12" md="4">
          <FastField
            component={DateField}
            name="capGiayPhepKinhDoanhVanTai"
            label={`${t('label:cap_ngay')}`}
            type="date"
            placeholder={`${t('placeholder:cap_ngay')}`}
          />
        </Col>
        <Col xs="12" md="4">
          <FastField
            component={InputField}
            label={t('label:tai')}
            name="noiCungCapGiayPhepKinhDoanhVanTai"
            placeholder={t('placeholder:tai_so_giay_phep_kinh_doanh_van_tai')}
          />
        </Col>
      </Row>
    </Fragment>
  );
};
export default React.memo(FormChuXe);
