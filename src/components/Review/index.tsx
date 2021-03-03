import React, { Fragment, useEffect } from 'react';

import EachFieldWithDot from 'components/EachFieldWithDot';
import EachFieldWithBox from 'components/EachFieldWithBox';
import EachFieldDate from 'components/EachFieldDate';
import { Formik } from 'formik';
import { Form } from 'reactstrap';
import { IoMdCheckmark } from 'react-icons/io';
import { TypeDangKyXe } from 'constants/types';
import EachRowWithDot from 'components/EachRowWithDot';

interface ReviewI {
  values: {
    [key: string]: any;
  };
  refFormToPrint?: any;
}

const Review: React.FC<ReviewI> = ({ values, refFormToPrint }) => {
  //! State
  useEffect(() => {
    // window.scrollTo({
    //   behavior: 'smooth',
    //   top: 0,
    // });
  }, []);

  //! Render
  return (
    <Fragment>
      <Formik initialValues={values} onSubmit={() => {}}>
        {(propsFormik) => (
          <Form ref={refFormToPrint}>
            {console.log(propsFormik.values, 'dqoiwjdioqwjdoi')}
            <div className="review-container page">
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
                <p className="underline font-weight-bold">
                  A. PHẦN CHỦ XE TỰ KÊ KHAI (self declaration vehicle owner's)
                </p>

                <div className="each-row">
                  <EachFieldWithDot label="Tên chủ xe" dot={794} value={values.tenChuXe} />
                  <EachFieldWithDot label="Năm sinh" dot={162} value={values.namSinh} />
                </div>

                <EachFieldWithDot label="Địa chỉ" dot={1070} value={values.diaChi} />

                <EachFieldWithBox
                  label="Số CCCD/CMND/Hộ chiếu của chủ xe"
                  numberBox={12}
                  style={{ marginLeft: 230 }}
                  values={values.cmndChuXe && values.cmndChuXe.split('')}
                />
                <div className="each-row">
                  <EachFieldDate label="Cấp ngày" dot={62} value={values.capNgayChuXe} />;{' '}
                  <EachFieldWithDot label="tại" dot={810} style={{ marginLeft: 8 }} value={values.taiChuXe} />
                </div>

                <EachFieldWithBox
                  label="Số CCCD/CMND/Hộ chiếu của người làm thủ tục"
                  numberBox={12}
                  style={{ marginLeft: 141 }}
                  values={values.cmndNguoiLamThuTuc && values.cmndNguoiLamThuTuc.split('')}
                />
                <div className="each-row">
                  <EachFieldDate label="Cấp ngày" dot={62} value={values.capNgayNguoiLamThuTuc} />;{' '}
                  <EachFieldWithDot label="tại" dot={810} style={{ marginLeft: 8 }} value={values.taiNguoiLamThuTuc} />
                </div>

                <div className="each-row">
                  <EachFieldWithBox
                    label="Điện thoại của chủ xe"
                    numberBox={12}
                    style={{ marginLeft: 139 }}
                    values={values.dienThoaiChuXe && values.dienThoaiChuXe.split('')}
                  />
                  <EachFieldWithDot label="Email" dot={319} style={{ marginLeft: 22 }} value={values.emailChuXe} />
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
                    dot={319}
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
                    dot={322}
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
                    dot={322}
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
                    dot={322}
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
                    dot={62}
                    style={{ marginLeft: 17 }}
                    value={values.capGiayPhepKinhDoanhVanTai}
                  />
                  ;{' '}
                  <EachFieldWithDot
                    label="tại"
                    dot={224}
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
                  <EachFieldWithDot label="Loại xe" dot={202} value={values.loaiXe} />;
                  <EachFieldWithDot label="Màu sơn" dot={202} style={{ marginLeft: 5 }} value={values.mauSon} />;
                  <EachFieldWithDot label="Nhãn hiệu" dot={202} style={{ marginLeft: 5 }} value={values.nhanHieu} />;
                  <EachFieldWithDot label="Số loại" dot={202} style={{ marginLeft: 5 }} value={values.soLoai} />
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
                    dot={786}
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
                    dot={786}
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

            <div className="review-container page">
              <div className="review-container__content">
                <p className="underline font-weight-bold">B. PHẦN KIỂM TRA XÁC ĐỊNH CỦA CƠ QUAN ĐĂNG KÝ XE</p>
                <div className="each-row">
                  <EachFieldWithDot label="BIỂN SỐ MỚI" dot={435} />;{' '}
                  <EachFieldWithDot label="BIỂN SỐ CŨ" dot={435} style={{ marginLeft: 14 }} />
                </div>

                <div className="review-container__img">
                  Nơi dán bản chà số máy (Đăng ký tạm thời, đổi, cấp lại đăng ký, biển số không phải dán)
                </div>

                <h4 className="text-center mb-2 mt-2">THÔNG KÊ CHỨNG TỪ ĐĂNG KÝ XE</h4>
                <div className="each-row">
                  <EachFieldWithDot label="Kích thước bao: Dài" dot={272} value={values.capLaiBienSoXe} notTwoDots />
                  m;
                  <EachFieldWithDot label="Rộng" dot={272} style={{ marginLeft: 11 }} notTwoDots />
                  m;
                  <EachFieldWithDot label="Cao" dot={272} style={{ marginLeft: 11 }} notTwoDots /> m
                </div>

                <div className="each-row">
                  <EachFieldWithDot label="Khối lượng bản thân" dot={414} />
                  kg;
                  <EachFieldWithDot label="Kích cỡ lốp" dot={414} style={{ marginLeft: 7 }} />
                </div>

                <div className="each-row">
                  <EachFieldWithDot label="Màu sơn" dot={246} />;
                  <EachFieldWithDot label="Năm sản xuất" dot={247} style={{ marginLeft: 8 }} />
                  ;
                  <EachFieldWithDot label="Dung tích xi lanh" dot={247} style={{ marginLeft: 8 }} />
                  cm<sup>3</sup>
                </div>

                <div className="each-row">
                  <EachFieldWithDot label="Khối lượng hàng chuyên chở" dot={343} />;
                  <EachFieldWithDot label="Khối lượng kéo theo" dot={343} style={{ marginLeft: 8 }} />
                  kg
                </div>

                <div className="each-row">
                  <EachFieldWithDot label="Kích thước thùng" dot={390} />
                  mm;
                  <EachFieldWithDot label="Chiều dài cơ sở" dot={390} style={{ marginLeft: 8 }} />
                  mm
                </div>

                <div className="each-row">
                  <EachFieldWithDot label="Số chỗ ngồi" dot={303} />;
                  <EachFieldWithDot label="Đứng" dot={303} style={{ marginLeft: 8 }} />;
                  <EachFieldWithDot label="Nằm" dot={303} style={{ marginLeft: 8 }} />
                </div>

                <div className="review-container__table">
                  <h4 className="text-center mb-2 mt-2">THÔNG KÊ CHỨNG TỪ ĐĂNG KÝ XE</h4>
                  <table>
                    <thead>
                      <tr>
                        <td>TT</td>
                        <td>LOẠI CHỨNG TỪ</td>
                        <td>CƠ QUAN CẤP</td>
                        <td>SỐ CHỨNG TỪ</td>
                        <td>NGÀY CẤP</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td />
                        <td />
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>2</td>
                        <td />
                        <td />
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>3</td>
                        <td />
                        <td />
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>4</td>
                        <td />
                        <td />
                        <td />
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div
                  className="d-flex justify-content-between text-center align-items-center mt-4"
                  style={{ marginBottom: 200 }}
                >
                  <div>
                    <p className="font-italic">Lạng Sơn, ngày.........tháng.........năm.........</p>
                    <p>CÁN BỘ ĐĂNG KÝ XE</p>
                    <p className="font-italic">(Ký, ghi rõ họ tên)</p>
                  </div>

                  <div>
                    <p>ĐỘI TRƯỞNG</p>
                    <p className="font-italic">(Ký, ghi rõ họ tên)</p>
                  </div>

                  <div className="mr-5">
                    <p>TRƯỞNG PHÒNG</p>
                    <p className="font-italic">(Ký tên và đóng dấu)</p>
                  </div>
                </div>

                <p className="underline font-weight-bold">
                  C. XÁC NHẬN THAY ĐỔI MÀU SƠN/XE CẢI TẠO CỦA CƠ QUAN ĐĂNG KÝ XE
                </p>
                <div className="each-row">
                  <EachFieldWithDot label="Xác nhận chủ xe" dot={994} />
                </div>
                <div className="each-row">
                  <EachFieldWithDot label="Địa chỉ" dot={1070} />
                </div>

                <div className="each-row">
                  <EachFieldWithDot label="Điện thoại" dot={302} />;
                  <EachFieldWithDot label="Email" dot={674} style={{ marginLeft: 8 }} />
                </div>

                <div className="each-row">
                  <EachRowWithDot row={3} label="Về các nội dung sau (3)" value="ahaihaiahihai" />
                </div>

                <div className="d-flex justify-content-between text-center align-items-center mt-4 mb-3">
                  <div>
                    <p className="font-italic">Lạng Sơn, ngày.........tháng.........năm.........</p>
                    <p>CÁN BỘ ĐĂNG KÝ XE</p>
                    <p className="font-italic">(Ký, ghi rõ họ tên)</p>
                  </div>

                  <div className="mr-5">
                    <p className="font-italic">Lạng Sơn, ngày.........tháng.........năm.........</p>
                    <p>TRƯỞNG PHÒNG</p>
                    <p className="font-italic">(Ký tên và đóng dấu)</p>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};
export default Review;
