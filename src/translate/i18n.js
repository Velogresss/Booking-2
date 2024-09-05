import i18n from 'i18next';
import {  useTranslation, initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      aboutUs: {
        title: "About Us",
        description: `"Trip All In One" was launched with the goal of revolutionizing the travel planning experience. Our concept is to create a one-stop solution for all travel needs, providing customers with a seamless and convenient process from travel arrangements to returning home. We aim to become your reliable partner in the world of travel, offering a wide range of services and personalized solutions`,
        button: "Learn More"
      },
      aboutUsPage: {
        title: "About Us",
        description: `"Trip All in One" — is a leading travel company that specializes in creating unique and unforgettable journeys for each client. Our mission is to turn your dreams of a perfect vacation into reality, offering a wide range of travel services and an individual approach to each order.`,
        titleAdvantages: "Our advantages:",
        advantages1:"Our team consists of experienced specialists in the field of tourism, who constantly monitor new trends and the best offers on the market.",
        titleAdvantages1: "Professionalism:",
        advantages2:"We understand that every trip is unique, so we create offers that meet your specific needs and desires.",
        titleAdvantages2: "Individual approach:",
        advantages3:"Our goal is to provide impeccable service at all stages of your trip so you can enjoy every minute.",
        titleAdvantages3: "High quality service:",
        addInfo:`"Trip All in One" — is not just a travel company, but your reliable partner in the world of travel. We strive not only to meet your expectations, but to exceed them, giving you the opportunity to create the best memories to last a lifetime. All in One: One Klick - One - Tripp!`
      }
    }
  },
  uk: {
    translation: {
      aboutUs: {
        title: "Про нас",
        description: `"Trip All In One" розпочала свою діяльність з метою революціонізувати досвід планування подорожей. Наша концепція полягає в створенні єдиного рішення для всіх туристичних потреб, яке забезпечить клієнтам бездоганний та зручний процес від організації подорожі до повернення додому. Ми прагнемо стати вашим надійним партнером у світі подорожей, пропонуючи широкий спектр послуг та персоналізовані рішення`,
        button: "Переглянути"
      },
      aboutUsPage: {
        title: "Про нас",
        description: `"Trip All in One" — це передова туристична компанія, яка спеціалізується на створенні унікальних і незабутніх подорожей для кожного клієнта. Наша місія — перетворити ваші мрії про ідеальний відпочинок на реальність, пропонуючи широкий спектр туристичних послуг та індивідуальний підхід до кожного замовлення.`,
        titleAdvantages: "Наші переваги:",
        advantages1:"Наша команда складається з досвідчених фахівців у сфері туризму, які постійно відстежують нові тренди і найкращі пропозиції на ринку.",
        titleAdvantages1:"Професіоналізм:",
        advantages2:"Ми розуміємо, що кожна подорож унікальна, тому створюємо пропозиції, що відповідають вашим конкретним потребам і бажанням",
        titleAdvantages2:"Індивідуальний підхід:",
        advantages3:"Наша мета — забезпечити бездоганний сервіс на всіх етапах вашої подорожі, щоб ви могли насолоджуватися кожною хвилиною.",
        titleAdvantages3:"Висока якість обслуговування:",
        addInfo:`"Trip All in One" — це не просто туристична компанія, а ваш надійний партнер у світі подорожей. Ми прагнемо не тільки виконати ваші очікування, а й перевершити їх, надаючи вам можливість створити найкращі спогади на все життя. All in One: One Klick - One - Tripp!`
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
