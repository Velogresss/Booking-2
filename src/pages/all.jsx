import React from 'react'
import myImage from '../img/Image.jpg';
import PaginationRestCardsComponent from '../components/UI/PaginationRestCardsComponent/PaginationRestCardsComponent';
import PaginationOfferCardComponent from '../components/UI/PaginationOfferCardComponent/PaginationOfferCardComponent';

const dataOffer = [
  {
    imgUrl: 'https://example.com/prague.jpg',
    discount: 39,
    oldPrice: '400$',
    newPrice: '302$',
    title: 'Авіатур до Праги',
    description: 'Це найбільший замковий комплекс у світі, символ чеської держави...',
  },
];

const dataRest = [
  { url: {myImage}, alt: 'Сеул', text: 'Сеул' },
  { url: {myImage}, alt: 'Лондон', text: 'Лондон' },
  { url: {myImage}, alt: 'Рим', text: 'Рим' },
  { url: {myImage}, alt: 'Париж', text: 'Париж' },
  { url: {myImage}, alt: 'Токіо', text: 'Токіо' },
  { url: {myImage}, alt: 'Шанхай', text: 'Шанхай' },
  { url: {myImage}, alt: 'Франкфурт', text: 'Франкфурт' },
  { url: {myImage}, alt: 'Стамбул', text: 'Стамбул' },
  { url: {myImage}, alt: 'Нью-Йорк', text: 'Нью-Йорк' },
  { url: {myImage}, alt: 'Чикаго', text: 'Чикаго' },
  { url: {myImage}, alt: 'Торонто', text: 'Торонто' },
  { url: {myImage}, alt: 'Ванкувер', text: 'Ванкувер' },
  { url: {myImage}, alt: 'Амстердам', text: 'Амстердам' },
  { url: {myImage}, alt: 'Сінгапур', text: 'Сінгапур' },
  { url: {myImage}, alt: 'Сан-Франциско', text: 'Сан-Франциско' },
  { url: {myImage}, alt: 'Люксембург', text: 'Люксембург' }
];

function All() {
  return (
    <div className='App'>
      <div>
      <h1></h1>
      { <PaginationRestCardsComponent data={dataRest} itemsPerPage={10} /> }
      </div>
      <div>
        <h1>Акційні пропозиції</h1>
        <PaginationOfferCardComponent data={dataOffer} itemsPerPage={6} />
      </div>
    </div>
  );
}

export default All;