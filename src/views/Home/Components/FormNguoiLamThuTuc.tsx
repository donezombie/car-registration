import React from 'react';
import { useTranslation } from 'react-i18next';
import IDCard from 'components/IDCardField';

const FormNguoiLamThuTuc = () => {
  const { t } = useTranslation();

  //! Render
  return (
    <IDCard
      headerLabel="Thông tin của người làm thủ tục"
      labelFieldCMND={t('label:so_cccd_nguoi_lam_thu_tuc')}
      nameFieldCMND="cmndNguoiLamThuTuc"
      nameFieldCapNgay="capNgayNguoiLamThuTuc"
      nameFieldNoiCap="taiNguoiLamThuTuc"
      nameFieldDienThoai="dienThoaiNguoiLamThuTuc"
      nameFieldEmail="emailNguoiLamThuTuc"
    />
  );
};
export default React.memo(FormNguoiLamThuTuc);
