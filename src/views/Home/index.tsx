import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'reactstrap';
import { AiOutlineSend } from 'react-icons/ai';
import { IoRefreshOutline } from 'react-icons/io5';
import { MdRateReview } from 'react-icons/md';

import { validationDangKyXe } from 'constants/validationSchema';
import FormChuXe from './Components/FormChuXe';
import FormNguoiLamThuTuc from './Components/FormNguoiLamThuTuc';
import FocusError from 'components/ErrorFocus';
import FormHoaDonDienTu from './Components/FormHoaDonDienTu';
import FormSoMay from './Components/FormSoMay';
import FormLoaiXe from './Components/FormLoaiXe';

import { PreviewMode } from 'constants/types';
import Review from 'components/Review';
import { initialValueForm } from 'constants/initialValues';

const HomePage = () => {
  //! State
  const { t } = useTranslation();
  const [previewMode, setPreviewMode] = useState(PreviewMode.editMode);

  //! Function
  const togglePreview = () => {
    if (previewMode === PreviewMode.editMode) {
      setPreviewMode(PreviewMode.previewMode);
    } else {
      setPreviewMode(PreviewMode.editMode);
    }
  };

  //! Render
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={validationDangKyXe}
      initialValues={initialValueForm}
      onSubmit={() => {}}
    >
      {(propsFormik) =>
        previewMode === PreviewMode.editMode ? (
          <main className="main-container container mx-auto pt-4 pb-4">
            <Form className="form-dang-ky">
              <FocusError />
              <h2 className="mb-3">{t('label:giay_khai_dang_ky_xe')}</h2>

              <FormChuXe />

              <hr />
              <FormNguoiLamThuTuc />

              <FormHoaDonDienTu />

              <hr />
              <FormSoMay />

              <FormLoaiXe />

              <div className="form-dang-ky__actions px-3 py-3 bg-white">
                <Button
                  type="button"
                  color="danger"
                  onClick={() => {
                    propsFormik.resetForm({});
                    window.scrollTo({
                      behavior: 'smooth',
                      top: 0,
                    });
                  }}
                >
                  {t('label:reset')} <IoRefreshOutline />
                </Button>
                <Button type="submit" color="primary">
                  {t('label:gui')} <AiOutlineSend />
                </Button>

                <Button type="button" color="success" onClick={togglePreview}>
                  {t('label:review')} <MdRateReview />
                </Button>
              </div>
            </Form>
          </main>
        ) : (
          <Review values={propsFormik.values} onBack={togglePreview} />
        )
      }
    </Formik>
  );
};
export default HomePage;
