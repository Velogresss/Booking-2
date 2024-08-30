import React from 'react'
import myImage from '../img/Offer/offer-1.png';
import bannerImage from '../img/lake.png';
import PaginationRestCardsComponent from '../components/UI/PaginationRestCardsComponent/PaginationRestCardsComponent';
import PaginationOfferCardComponent from '../components/UI/PaginationOfferCardComponent/PaginationOfferCardComponent';

const dataOffer = [
  {
    imgUrl: {myImage},
    discount: 39,
    oldPrice: '400$',
    newPrice: '302$',
    title: 'Авіатур до Праги',
    description: 'Це найбільший замковий комплекс у світі, символ чеської держави...',
  },
];

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
        <PaginationOfferCardComponent data={dataOffer} itemsPerPage={6} />
      </div>
    </div>
  );
}

export default All;