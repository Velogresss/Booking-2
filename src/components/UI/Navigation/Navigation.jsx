import React from 'react';
import classes from './Navigation.module.css';
import logoImage from '../../../img/logoImage.png';
import cartIcon from '../../../img/cartIcon.png'; 

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Navigation = ({ navigate }) => {
  return (
    <nav className={classes.navigation}>
      <div className={classes.logo}>
        <img src={logoImage} alt="LOGO" />
      </div>
      <div className={classes.rows_box}>
        <div className={classes.rows}>
          <ul className={classes.nav_links}>
            <li><p onClick={() => navigate('/contacts')}>Контакти</p></li>
            <li><p onClick={() => navigate('/about')}>Про нас</p></li>
            <li><p onClick={() => navigate('/login')}>Увійти</p></li>
            <li><p onClick={() => navigate('/register')}>Реєстрація</p></li>
          </ul>
        </div>
        <div className={classes.rows}>
          <ul className={classes.nav_links}>
            <li><p onClick={() => navigate('/flights')}>Авіарейси</p></li>
            <li><p onClick={() => navigate('/accommodation')}>Помешкання</p></li>
            <li><p onClick={() => navigate('/leisure')}>Дозвілля</p></li>
            <li><p onClick={() => navigate('/airport-taxi')}>Таксі з/до аеропорту</p></li>
          </ul>
        </div>
      </div>
      <div className={classes.another}>
      <div className={classes.actions}>
        <img src={cartIcon} alt="Cart" className={classes.cart} onClick={() => navigate('/cart')} />
      </div>
        {/* <h2>{t('Welcome to React')}</h2>; */}
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export default Navigation;
