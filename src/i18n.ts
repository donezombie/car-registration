import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLang from './locales/en';
import viLang from './locales/vi';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(
    {
      lng: 'vi',
      fallbackLng: 'vi',
      resources: {
        en: enLang,
        vi: viLang,
      },
      interpolation: {
        escapeValue: false,
      },
    },
    () => {},
  );

export default i18n;
