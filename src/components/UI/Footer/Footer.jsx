import React from 'react';
import classes from './Footer.module.css';

const Footer = ({ onNavigate }) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.section}>
        <h3>Про нас</h3>
        <ul>
          <li onClick={() => onNavigate('/contacts')}>Контакти</li>
          <li onClick={() => onNavigate('/flights')}>Авіарейси</li>
          <li onClick={() => onNavigate('/about')}>Про нас</li>
          <li onClick={() => onNavigate('/accommodation')}>Помешкання</li>
          <li onClick={() => onNavigate('/leisure')}>Дозвілля</li>
          <li onClick={() => onNavigate('/airport-taxi')}>Таксі з/до аеропорту</li>
        </ul>
      </div>

      <div className={classes.section}>
        <h3>Інші послуги</h3>
        <ul>
          <li>Планування та проведення заходів для клієнтів та партнерів.</li>
          <li>Підтримка клієнтів до та після подорожі</li>
          <li>Консультації та надання інформації про туристичні послуги</li>
        </ul>
      </div>

      <div className={classes.section}>
        <h3>Про нас</h3>
        <ul>
          <li onClick={() => onNavigate('/support')}>Служба підтримки клієнтів</li>
          <li onClick={() => onNavigate('/guarantee')}>Гарантія обслуговування</li>
        </ul>
      </div>

      <div className={classes.paymentSection}>
        <h3>Способи оплати</h3>
        <div className={classes.paymentIcons}>
          <img src="/path/to/mastercard-icon.png" alt="Mastercard" />
          <img src="/path/to/uatp-icon.png" alt="UATP" />
          <img src="/path/to/visa-icon.png" alt="Visa" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
