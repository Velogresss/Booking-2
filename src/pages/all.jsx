import React from 'react'
import bannerImage from '../img/lake.png';
import PaginationRestCardsComponent from '../components/UI/PaginationRestCardsComponent/PaginationRestCardsComponent';
import PaginationOfferCardComponent from '../components/UI/PaginationOfferCardComponent/PaginationOfferCardComponent';
import AboutUs from '../components/UI/AboutUsMainComponent/AboutUs'
import ImageZoom from '../components/UI/ImageZoom/ImageZoom'

function All() {
  return (
    <div className='App'>
      <div>
      <img src={bannerImage} alt="" />
      <h1></h1>
      { <PaginationRestCardsComponent/> }
      </div>
      <div>
        <h1>Акційні пропозиції</h1>
        <PaginationOfferCardComponent/>
      </div>
      <div className="app-container">
            <h1>Популярні тури</h1>
            <div className="images-grid">
                <ImageZoom 
                    image="/path/to/france.jpg" 
                    title="Франція" 
                    description="У Франції збереглися лише незначні залишки колись величних лісів."
                />
                <ImageZoom 
                    image="/path/to/turkey.jpg" 
                    title="Туреччина" 
                    description="Жодну мову, крім турецької, не можна викладати в ролі рідної мови турецьким громадам."
                />
                <ImageZoom 
                    image="/path/to/japan.jpg" 
                    title="Японія" 
                    description="Японія — це країна контрастів, де сучасність переплітається з традиціями."
                />
                <ImageZoom 
                    image="/path/to/korea.jpg" 
                    title="Корея" 
                    description="Корея відома своїми технологіями та старовинними храмами."
                />
                <ImageZoom 
                    image="/path/to/dubai.jpg" 
                    title="Дубай" 
                    description="Дубай — місто майбутнього з найвищими хмарочосами у світі."
                />
            </div>
        </div>
      <AboutUs/>
    </div>
  );
}

export default All;