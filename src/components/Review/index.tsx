import React, { useEffect } from 'react';

import EachFieldWithDot from 'components/EachFieldWithDot';
import EachFieldWithBox from 'components/EachFieldWithBox';
import EachFieldDate from 'components/EachFieldDate';
import { Formik } from 'formik';
import { Button, Form } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { IoMdCheckmark } from 'react-icons/io';
import { TypeCapLai, TypeDangKyXe } from 'constants/types';

interface ReviewI {
  values: {
    [key: string]: any;
  };
  onBack?: () => void;
}

const Review: React.FC<ReviewI> = ({ values, onBack }) => {
  //! State
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }, []);
  //! Function

  //! Render
  return (
    <Formik initialValues={values} onSubmit={() => {}}>
      {(propsFormik) => (
        <Form>
          {console.log(propsFormik.values, 'dqoiwjdioqwjdoi')}
          <div className="review-container page">
            <div className="review-container__actions">
              <Button type="button" outline color="primary" onClick={onBack}>
                {t('label:back')}
              </Button>
            </div>
            <div className="review-container__header">
              <div className="header-1">
                <h3>Cộng hoà xã hội chủ nghĩa Việt Nam</h3>
                <h4>Độc lập - Tự do - Hạnh phúc</h4>
              </div>
              <div className="header-2">
                <p>Mẫu số 01</p>
                <p>Ban hành kèm theo Thông tư số 58/2020/TT-BCA</p>
                <p>Ngày 16/6/2020 của Bộ Công an</p>
              </div>
            </div>

            <div className="review-container__title">
              <h3>GIẤY KHAI ĐĂNG KÝ XE (Vehicle registration declaration)</h3>
            </div>

            <div className="review-container__content">
              <p className="underline font-weight-bold">A. PHẦN CHỦ XE TỰ KÊ KHAI (self declaration vehicle owner's)</p>

              <div className="each-row">
                <EachFieldWithDot label="Tên chủ xe" dot={189} value={values.tenChuXe} />
                <EachFieldWithDot label="Năm sinh" dot={45} value={values.namSinh} />
              </div>

              <EachFieldWithDot label="Địa chỉ" dot={262} value={values.diaChi} />

              <EachFieldWithBox
                label="Số CCCD/CMND/Hộ chiếu của chủ xe"
                numberBox={12}
                style={{ marginLeft: 230 }}
                values={values.cmndChuXe && values.cmndChuXe.split('')}
              />
              <div className="each-row">
                <EachFieldDate label="Cấp ngày" dot={20} value={values.capNgayChuXe} />;{' '}
                <EachFieldWithDot label="tại" dot={185} style={{ marginLeft: 8 }} value={values.taiChuXe} />
              </div>

              <EachFieldWithBox
                label="Số CCCD/CMND/Hộ chiếu của người làm thủ tục"
                numberBox={12}
                style={{ marginLeft: 141 }}
                values={values.cmndNguoiLamThuTuc && values.cmndNguoiLamThuTuc.split('')}
              />
              <div className="each-row">
                <EachFieldDate label="Cấp ngày" dot={20} value={values.capNgayNguoiLamThuTuc} />;{' '}
                <EachFieldWithDot label="tại" dot={185} style={{ marginLeft: 8 }} value={values.taiNguoiLamThuTuc} />
              </div>

              <div className="each-row">
                <EachFieldWithBox
                  label="Điện thoại của chủ xe"
                  numberBox={12}
                  style={{ marginLeft: 139 }}
                  values={values.dienThoaiChuXe && values.dienThoaiChuXe.split('')}
                />
                <EachFieldWithDot label="Email" dot={75} style={{ marginLeft: 22 }} value={values.emailChuXe} />
              </div>

              <div className="each-row">
                <EachFieldWithBox
                  label="Điện thoại của người làm thủ tục"
                  numberBox={12}
                  style={{ marginLeft: 50 }}
                  values={values.dienThoaiNguoiLamThuTuc && values.dienThoaiNguoiLamThuTuc.split('')}
                />
                <EachFieldWithDot
                  label="Email"
                  dot={75}
                  style={{ marginLeft: 22 }}
                  value={values.emailNguoiLamThuTuc}
                />
              </div>

              <div className="each-row">
                <EachFieldWithBox
                  label="Số hoá đơn điện tử"
                  numberBox={8}
                  style={{ marginLeft: 20, marginRight: 34 }}
                  values={values.soHoaDonDienTu && values.soHoaDonDienTu.split('')}
                />
                <EachFieldWithBox
                  label="Mã số thuế"
                  numberBox={14}
                  style={{ marginLeft: 40 }}
                  values={values.maSoThue && values.maSoThue.split('')}
                />
              </div>

              <div className="each-row">
                <EachFieldWithBox
                  label="Mã hồ sơ khai lệ phí trước bạ"
                  numberBox={12}
                  style={{ marginLeft: 20 }}
                  values={values.maHoSoKhaiLePhiTruocBa && values.maHoSoKhaiLePhiTruocBa.split('')}
                />
                <EachFieldWithDot
                  label="Cơ quan cấp"
                  dot={76}
                  style={{ marginLeft: 24 }}
                  value={values.coQuanCapMaHoSoKhaiLePhiTruocBa}
                />
              </div>

              <div className="each-row">
                <EachFieldWithBox
                  label="Số tờ khai hải quan điện tử"
                  numberBox={8}
                  style={{ marginLeft: 40, marginRight: 140 }}
                  values={values.soToKhaiHaiQuanDienTu && values.soToKhaiHaiQuanDienTu.split('')}
                />
                <EachFieldWithDot
                  label="Cơ quan cấp"
                  dot={76}
                  style={{ marginLeft: 24 }}
                  value={values.coQuanCapToKhaiHaiQuanDienTu}
                />
              </div>

              <div className="each-row">
                <EachFieldWithBox
                  label="Số sêri Phiếu KTCLXX"
                  numberBox={12}
                  style={{ marginLeft: 64 }}
                  values={values.seriPhieuKTCLXX}
                />
                <EachFieldWithDot
                  label="Cơ quan cấp"
                  dot={76}
                  style={{ marginLeft: 24 }}
                  value={values.coQuanCapPhieuKTCLXX}
                />
              </div>

              <div className="each-row">
                <EachFieldWithBox
                  label="Số giấy phép kinh doanh vận tải"
                  numberBox={8}
                  style={{ marginLeft: 33 }}
                  values={values.soGiayPhepKinhDoanhVanTai && values.soGiayPhepKinhDoanhVanTai.split('')}
                />
                <EachFieldDate
                  label="cấp ngày"
                  dot={20}
                  style={{ marginLeft: 17 }}
                  value={values.capGiayPhepKinhDoanhVanTai}
                />
                ;{' '}
                <EachFieldWithDot
                  label="tại"
                  dot={39}
                  style={{ marginLeft: 5 }}
                  value={values.noiCungCapGiayPhepKinhDoanhVanTai}
                />
              </div>

              <EachFieldWithBox
                label={`Số máy 1 <span style="font-style: italic">(Engine N0)</span>`}
                numberBox={30}
                style={{ marginLeft: 35 }}
                styleBox={{ width: 30 }}
                values={values.soMay1 && values.soMay1.split('')}
              />
              <EachFieldWithBox
                label={`Số máy 2 <span style="font-style: italic">(Engine N0)</span>`}
                numberBox={30}
                style={{ marginLeft: 35 }}
                styleBox={{ width: 30 }}
                values={values.soMay2 && values.soMay2.split('')}
              />
              <EachFieldWithBox
                label={`Số khung <span style="font-style: italic">(Chassis N0)</span>`}
                numberBox={30}
                style={{ marginLeft: 29 }}
                styleBox={{ width: 30 }}
                values={values.soKhung && values.soKhung.split('')}
              />

              <div className="review-container__img">
                Nơi dán bản chà số máy (Đăng ký tạm thời, đổi, cấp lại đăng ký, biển số không phải dán)
              </div>

              <div className="each-row">
                <EachFieldWithDot label="Loại xe" dot={50} value={values.loaiXe} />;
                <EachFieldWithDot label="Màu sơn" dot={50} style={{ marginLeft: 5 }} value={values.mauSon} />;
                <EachFieldWithDot label="Nhãn hiệu" dot={50} style={{ marginLeft: 5 }} value={values.nhanHieu} />;
                <EachFieldWithDot label="Số loại" dot={50} style={{ marginLeft: 5 }} value={values.soLoai} />
              </div>

              <div className="each-row justify-content-between" style={{ padding: '0 11px 0 0' }}>
                <EachFieldWithBox
                  label={`<span style="font-style: italic; font-weight: bold">Đăng ký mới</span>`}
                  numberBox={1}
                  style={{ marginLeft: 20 }}
                  values={[values.dangKy === TypeDangKyXe.dangKyXeMoi ? <IoMdCheckmark /> : '']}
                />
                <EachFieldWithBox
                  label={`<span style="font-style: italic; font-weight: bold">Đăng ký sang tên</span>`}
                  numberBox={1}
                  style={{ marginLeft: 20 }}
                  values={[values.dangKy === TypeDangKyXe.dangKySangTen ? <IoMdCheckmark /> : '']}
                />
                <EachFieldWithBox
                  label={`<span style="font-style: italic; font-weight: bold">Đăng ký tạm thời</span>`}
                  numberBox={1}
                  style={{ marginLeft: 20 }}
                  values={[values.dangKy === TypeDangKyXe.dangKyTamThoi ? <IoMdCheckmark /> : '']}
                />
              </div>

              <div className="each-row">
                <EachFieldWithBox
                  label={`<span style="font-style: italic; font-weight: bold">Đổi lại, cấp lại đăng ký xe</span>`}
                  numberBox={1}
                  style={{ marginLeft: 20 }}
                  values={[values.capLaiDangKyXe ? <IoMdCheckmark /> : '']}
                />
                <EachFieldWithDot
                  label={`<span style="font-style: italic; font-weight: bold">Lý do</span>`}
                  dot={195}
                  style={{ marginLeft: 20 }}
                  value={values.lyDoCapLaiDangKyXe}
                />
              </div>

              <div className="each-row">
                <EachFieldWithBox
                  label={`<span style="font-style: italic; font-weight: bold">Đổi lại, cấp lại biển số xe</span>`}
                  numberBox={1}
                  style={{ marginLeft: 27 }}
                  values={[values.capLaiBienSoXe ? <IoMdCheckmark /> : '']}
                />
                <EachFieldWithDot
                  label={`<span style="font-style: italic; font-weight: bold">Lý do</span>`}
                  dot={195}
                  style={{ marginLeft: 20 }}
                  value={values.lyDoCapLaiBienSoXe}
                />
              </div>

              <span className="review-container__commitment">
                Tôi xin cam đoan về nội dung khai trên là đúng và hoàn toàn chịu trách nhiệm trước pháp luật về các
                chứng từ trong hồ sơ xe{' '}
                <span className="font-italic">
                  (I swear on the content declaration is correct and complexly responsible before law for the vehicle
                  documents in the file).
                </span>
              </span>

              <div className="review-container__signature">
                <div>
                  <p className="font-italic">
                    Lạng Sơn, ngày (date)..................tháng..................năm..................
                  </p>
                  <p>
                    CHỦ XE <span className="font-italic">(Owner's full name)</span>
                  </p>
                  <p className="font-italic">(Ký, ghi rõ họ tên, đóng dấu nếu là xe cơ quan)</p>
                  <p className="font-italic">(Signature, write full name)</p>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default Review;
