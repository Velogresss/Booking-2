import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.module.css';

function AboutUs() {
    const { t } = useTranslation();

    return (
        <div className="about-us-container">
            <div className="image-section">
                <img 
                    src="image-url"
                    alt={t('aboutUs.title')}
                    className="about-us-image"
                />
            </div>
            <div className="text-section">
                <h1>{t('aboutUs.title')}</h1>
                <p>{t('aboutUs.description')}</p>
                <button className="learn-more-button">{t('aboutUs.button')}</button>
            </div>
        </div>
    );
}

export default AboutUs;