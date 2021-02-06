import i18n from 'i18next';
import en from './locales/en'
import ru from './locales/ru'
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    //debug: true,
    initImmediate: false,
    preload: ["en", "ru"],
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: { translation: en },
      ru: { translation: ru }
    }
  });

export default i18n;
