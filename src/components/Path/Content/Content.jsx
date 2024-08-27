import React from 'react';
import All from '../../../pages/all';
import About from '../../../pages/about';
import Login from '../../../pages/login';

const Content = ({ currentPath }) => {
  switch (currentPath) {
    case '/about':
      return <About />;
    case '/accommodation':
      return <All />;
    case '/contacts':
      return <div>Контакти</div>;
    case '/flights':
      return <div>Авіарейси</div>;
    case '/leisure':
      return <div>Дозвілля</div>;
    case '/airport-taxi':
      return <div>Таксі з/до аеропорту</div>;
    case '/support':
      return <div>Служба підтримки клієнтів</div>;
    case '/guarantee':
      return <div>Гарантія обслуговування</div>;
    case '/login':
      return <Login />;
    case '/register':
      return <div>Реєстрація</div>;
    default:
      return <div>Головна сторінка</div>;
  }
};

export default Content;