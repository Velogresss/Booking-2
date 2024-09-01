import i18n from 'i18next';
import {  useTranslation, initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      aboutUs: {
        title: "About Us",
        description: `"Trip All in One" is a leading travel company specializing in creating unique and unforgettable trips for each client. Our mission is to turn your dream vacation into reality by offering a wide range of travel services and a personalized approach to every order.`,
        button: "Learn More"
      }
    }
  },
  uk: {
    translation: {
      aboutUs: {
        title: "Про нас",
        description: `"Trip All in One" — це передова туристична компанія, яка спеціалізується на створенні унікальних і незабутніх подорожей для кожного клієнта. Наша місія — перетворити ваші мрії про ідеальний відпочинок на реальність, пропонуючи широкий спектр туристичних послуг та індивідуальний підхід до кожного замовлення.`,
        button: "Переглянути"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uk', 
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
