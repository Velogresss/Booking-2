import React, { useState, useEffect } from 'react';
import Navigation from './components/UI/Navigation/Navigation';
import Footer from './components/UI/Footer/Footer';
import Content from './components/Path/Content/Content';
import { AuthContext } from './context/context';
import '../src/translate/i18n'; 

// import myImage from './img/Offer/offer-1.png'; 

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const handleNavigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onPopState);

    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }} >
      <Navigation navigate={handleNavigate} />
      {/* <img src={myImage} alt="Description" /> */}
      <Content currentPath={currentPath} />
      <Footer onNavigate={handleNavigate} />
    </AuthContext.Provider>
  );
}

export default App;