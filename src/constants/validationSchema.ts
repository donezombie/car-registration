import * as Yup from 'yup';
import { vnPhoneRegex, validEmailRegex } from './regex';
import i18n from 'i18n';

export const validationDangKyXe = Yup.object().shape({
  //* Chu xe
  tenChuXe: Yup.string().required(i18n.t('message:must_required', { name: 'Tên chủ xe' })),
  namSinh: Yup.number()
    .typeError(i18n.t('message:must_number', { name: 'Năm sinh' }))
    .required(i18n.t('message:must_required', { name: 'Năm sinh' })),
  cmndChuXe: Yup.number()
    .typeError(i18n.t('message:must_number', { name: 'Chứng minh nhân dân/ căn cước công dân/ Hộ chiếu' }))
    .required(i18n.t('message:must_required', { name: 'Chứng minh nhân dân/ căn cước công dân/ Hộ chiếu' })),
  capNgayChuXe: Yup.string().required(i18n.t('message:must_required', { name: 'Cấp ngày' })),
  taiChuXe: Yup.string().required(i18n.t('message:must_required', { name: 'Nơi cấp' })),
  dienThoaiChuXe: Yup.string().matches(vnPhoneRegex, i18n.t('message:invalid_phone')),
  emailChuXe: Yup.string().email(i18n.t('message:invalid_email')),

  //* Nguoi lam thu tuc
  cmndNguoiLamThuTuc: Yup.number()
    .typeError(i18n.t('message:must_number', { name: 'Chứng minh nhân dân/ căn cước công dân/ Hộ chiếu' }))
    .required(i18n.t('message:must_required', { name: 'Chứng minh nhân dân/ căn cước công dân/ Hộ chiếu' })),
  capNgayNguoiLamThuTuc: Yup.string().required(i18n.t('message:must_required', { name: 'Cấp ngày' })),
  taiNguoiLamThuTuc: Yup.string().required(i18n.t('message:must_required', { name: 'Nơi cấp' })),
  dienThoaiNguoiLamThuTuc: Yup.string().matches(vnPhoneRegex, i18n.t('message:invalid_phone')),
  emailNguoiLamThuTuc: Yup.string().email(i18n.t('message:invalid_email')),
});
