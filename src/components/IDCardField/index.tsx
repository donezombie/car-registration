import React from 'react';
import { useDispatch } from 'react-redux';
import { FastField } from 'formik';
import { Col, Row } from 'reactstrap';

import AvatarDefault from 'assets/ava-default.png';
import InputField from 'components/CustomField/InputField';
import { useTranslation } from 'react-i18next';
import DateField from 'components/CustomField/DateField';
import { ProvinceData } from 'constants/index';
import SelectField from 'components/CustomField/SelectField';
import { convertToFormSelect, suppressNonNumericInput } from 'helpers';
import { TypeUser } from 'constants/types';
import {
  TooltipForCapNgay,
  TooltipForTen,
  TooltipForCMND,
  TooltipForDiaDiemCap,
  TooltipForDiaChi,
  TooltipForNamSinh,
} from 'constants/dataTooltip';

interface IDCardI {
  nameFieldCMND: string;
  nameFieldCapNgay: string;
  nameFieldNoiCap: string;
  nameFieldDienThoai: string;
  nameFieldEmail: string;
  nameFieldTenChuXe?: string;
  nameFieldNamSinh?: string;
  nameFieldDiaChi?: string;
  headerLabel?: string;
  labelFieldCMND?: string;
  type?: TypeUser;
}

const IDCard: React.FC<IDCardI> = ({
  headerLabel,
  labelFieldCMND,
  nameFieldCMND,

  nameFieldTenChuXe,
  nameFieldNamSinh,
  nameFieldDiaChi,
  nameFieldCapNgay,
  nameFieldNoiCap,
  nameFieldDienThoai,
  nameFieldEmail,
  type,
}) => {
  //! State
  const { t } = useTranslation();

  //! Function

  //! Render
  return (
    <div className="id-container rounded shadow mt-3 mb-3">
      <div className="id-container__header">{headerLabel}</div>
      <div className="id-container__info">
        <div className="id-container__ava">
          <img alt="ava" src={AvatarDefault} />
        </div>
        <div className="id-container__content">
          {type === TypeUser.chuXe && (
            <Row>
              <Col xs="12" md="8">
                <FastField
                  component={InputField}
                  name={nameFieldTenChuXe}
                  label={`${t('label:ten_chu_xe')}`}
                  placeholder={`${t('placeholder:ten_chu_xe')}`}
                  messageToolTip={<TooltipForTen />}
                  placementTooltip="left"
                  required
                />
              </Col>

              <Col xs="12" md="4">
                <FastField
                  component={InputField}
                  name={nameFieldNamSinh}
                  label={`${t('label:nam_sinh')}`}
                  placeholder={`${t('placeholder:nam_sinh')}`}
                  onKeyDown={suppressNonNumericInput}
                  messageToolTip={<TooltipForNamSinh />}
                  placementTooltip="left"
                  required
                />
              </Col>

              <Col xs="12" md="12">
                <FastField
                  component={InputField}
                  name={nameFieldDiaChi}
                  label={`${t('label:dia_chi')}`}
                  placeholder={`${t('placeholder:dia_chi')}`}
                  messageToolTip={<TooltipForDiaChi />}
                  placementTooltip="left"
                />
              </Col>
            </Row>
          )}
          <FastField
            component={InputField}
            name={nameFieldCMND}
            label={labelFieldCMND}
            placeholder={t('placeholder:so_cccd')}
            messageToolTip={<TooltipForCMND />}
            placementTooltip="left"
            onKeyDown={suppressNonNumericInput}
            maxLength={12}
            required
          />
          <Row>
            <Col xs="12" md="6">
              <FastField
                component={DateField}
                name={nameFieldCapNgay}
                label={`${t('label:cap_ngay')}`}
                placeholder={`${t('placeholder:cap_ngay')}`}
                messageToolTip={<TooltipForCapNgay />}
                placementTooltip="left"
                required
              />
            </Col>
            <Col xs="12" md="6">
              <FastField
                component={SelectField}
                name={nameFieldNoiCap}
                options={convertToFormSelect(ProvinceData)}
                label={`${t('label:tai')}`}
                placeholder={`${t('placeholder:tai_dia_diem_cap')}`}
                messageToolTip={<TooltipForDiaDiemCap />}
                placementTooltip="left"
                required
              />
            </Col>
          </Row>

          <Row>
            <Col xs="12" md="6">
              <FastField
                component={InputField}
                name={nameFieldDienThoai}
                label={`${t('label:dien_thoai')}`}
                placeholder={`${t('placeholder:so_dien_thoai')}`}
              />
            </Col>
            <Col xs="12" md="6">
              <FastField
                component={InputField}
                name={nameFieldEmail}
                label={`${t('label:email')}`}
                placeholder={`${t('placeholder:email')}`}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default IDCard;
