import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from '../../libs/translation-lib/src/assets/i18n/en.json';
import translationIT from '../../libs/translation-lib/src/assets/i18n/it.json';

const resources = {
  en: {
    translation: translationEN
  },
  it: {
    translation: translationIT
  }
};

// Listen to changes in localStorage lang changes
window.addEventListener('lang', () => {
  if(localStorage.getItem('lang')){
    i18n.changeLanguage(localStorage.getItem('lang'));
  }
})

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lang') || 'en', // language to use
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;