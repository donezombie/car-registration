import React from 'react';
import IDCard from 'components/IDCardField';
import { useTranslation } from 'react-i18next';
import { TypeUser } from 'constants/types';

const FormChuXe = () => {
  const { t } = useTranslation();

  //! Render
  return (
    <IDCard
      type={TypeUser.chuXe}
      headerLabel="Thông tin chủ xe"
      labelFieldCMND={t('label:so_cccd')}
      nameFieldCMND="cmndChuXe"
      nameFieldCapNgay="capNgayChuXe"
      nameFieldNoiCap="taiChuXe"
      nameFieldDienThoai="dienThoaiChuXe"
      nameFieldEmail="emailChuXe"
      nameFieldTenChuXe="tenChuXe"
      nameFieldNamSinh="namSinh"
      nameFieldDiaChi="diaChi"
    />
  );
};
export default React.memo(FormChuXe);
