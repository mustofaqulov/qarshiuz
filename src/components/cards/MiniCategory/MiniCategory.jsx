import CardItems from './CategoryItem/CategoryItem';
import { useState } from 'react';
// import CornerLeft from '../../../assets/icons/corner-left.svg';
import style from './small-card.module.scss';
const category = [
  {
    id: 1,
    place: 'Restaurant',
    img: 'https://www.uzbek-travel.com/images/uz/Cities/Karshi/karshi11.jpg',
    info: {
      headTitle: 'See all advertisements',
      restaurantPlaces: [
        { id: 1, namePlace: 'Restaurant' },
        { id: 2, namePlace: 'Restaurant' },
        { id: 3, namePlace: 'Restaurant' },
        { id: 4, namePlace: 'Restaurant' },
        { id: 5, namePlace: 'Restaurant' },
        { id: 6, namePlace: 'Restaurant' },
        { id: 7, namePlace: 'Restaurant' },
      ],
    },
  },
  {
    id: 2,
    place: 'Cafe',
    img: 'https://www.uzbek-travel.com/images/uz/Cities/Karshi/karshi11.jpg',
    info: {
      headTitle: 'See all advertisements',
      restaurantPlaces: [
        { id: 1, namePlace: 'Cafe' },
        { id: 2, namePlace: 'Cafe' },
        { id: 3, namePlace: 'Cafe' },
        { id: 4, namePlace: 'Cafe' },
        { id: 5, namePlace: 'Cafe' },
        { id: 6, namePlace: 'Cafe' },
        { id: 7, namePlace: 'Cafe' },
      ],
    },
  },
  {
    id: 3,
    place: 'Sport club',
    img: 'https://www.uzbek-travel.com/images/uz/Cities/Karshi/karshi11.jpg',
    info: {
      headTitle: 'See all advertisements',
      restaurantPlaces: [
        { id: 1, namePlace: 'Sport club' },
        { id: 2, namePlace: 'Sport club' },
        { id: 3, namePlace: 'Sport club' },
        { id: 4, namePlace: 'Sport club' },
        { id: 5, namePlace: 'Sport club' },
        { id: 6, namePlace: 'Sport club' },
        { id: 7, namePlace: 'Sport club' },
      ],
    },
  },
  {
    id: 3,
    place: 'Pharmacy',
    img: 'https://www.uzbek-travel.com/images/uz/Cities/Karshi/karshi11.jpg',
    info: {
      headTitle: 'See all advertisements',
      restaurantPlaces: [
        { id: 1, namePlace: 'Pharmacy' },
        { id: 2, namePlace: 'Pharmacy' },
        { id: 3, namePlace: 'Pharmacy' },
        { id: 4, namePlace: 'Pharmacy' },
        { id: 5, namePlace: 'Pharmacy' },
        { id: 6, namePlace: 'Pharmacy' },
        { id: 7, namePlace: 'Pharmacy' },
      ],
    },
  },
  {
    id: 4,
    place: 'Library',
    img: 'https://www.uzbek-travel.com/images/uz/Cities/Karshi/karshi11.jpg',
    info: {
      headTitle: 'See all advertisements',
      restaurantPlaces: [
        { id: 1, namePlace: 'Library' },
        { id: 2, namePlace: 'Library' },
        { id: 3, namePlace: 'Library' },
        { id: 4, namePlace: 'Library' },
        { id: 5, namePlace: 'Library' },
        { id: 6, namePlace: 'Library' },
        { id: 7, namePlace: 'Library' },
      ],
    },
  },
  {
    id: 5,
    place: 'Hotel',
    img: 'https://www.uzbek-travel.com/images/uz/Cities/Karshi/karshi11.jpg',
    info: {
      headTitle: 'See all advertisements',
      restaurantPlaces: [
        { id: 1, namePlace: 'Hotel' },
        { id: 2, namePlace: 'Hotel' },
        { id: 3, namePlace: 'Hotel' },
        { id: 4, namePlace: 'Hotel' },
        { id: 5, namePlace: 'Hotel' },
        { id: 6, namePlace: 'Hotel' },
        { id: 7, namePlace: 'Hotel' },
      ],
    },
  },
  {
    id: 6,
    place: 'Entertainment',
    img: 'https://www.uzbek-travel.com/images/uz/Cities/Karshi/karshi11.jpg',
    info: {
      headTitle: 'See all advertisements',
      restaurantPlaces: [
        { id: 1, namePlace: 'Entertainment' },
        { id: 2, namePlace: 'Entertainment' },
        { id: 3, namePlace: 'Entertainment' },
        { id: 4, namePlace: 'Entertainment' },
        { id: 5, namePlace: 'Entertainment' },
        { id: 6, namePlace: 'Entertainment' },
        { id: 7, namePlace: 'Entertainment' },
      ],
    },
  },
  {
    id: 7,
    place: 'Museum',
    img: 'https://www.uzbek-travel.com/images/uz/Cities/Karshi/karshi11.jpg',
    info: {
      headTitle: 'See all advertisements',
      restaurantPlaces: [
        { id: 1, namePlace: 'Museum' },
        { id: 2, namePlace: 'Museum' },
        { id: 3, namePlace: 'Museum' },
        { id: 4, namePlace: 'Museum' },
        { id: 5, namePlace: 'Museum' },
        { id: 6, namePlace: 'Museum' },
        { id: 7, namePlace: 'Museum' },
      ],
    },
  },
  {
    id: 8,
    place: 'ATM',
    img: 'https://www.uzbek-travel.com/images/uz/Cities/Karshi/karshi11.jpg',
    info: {
      headTitle: 'See all advertisements',
      restaurantPlaces: [
        { id: 1, namePlace: 'ATM' },
        { id: 2, namePlace: 'ATM' },
        { id: 3, namePlace: 'ATM' },
        { id: 4, namePlace: 'ATM' },
        { id: 5, namePlace: 'ATM' },
        { id: 6, namePlace: 'ATM' },
        { id: 7, namePlace: 'ATM' },
      ],
    },
  },
  {
    id: 9,
    place: 'School',
    img: 'https://www.uzbek-travel.com/images/uz/Cities/Karshi/karshi11.jpg',
    info: {
      headTitle: 'See all advertisements',
      restaurantPlaces: [
        { id: 1, namePlace: 'School' },
        { id: 2, namePlace: 'School' },
        { id: 3, namePlace: 'School' },
        { id: 4, namePlace: 'School' },
        { id: 5, namePlace: 'School' },
        { id: 6, namePlace: 'School' },
        { id: 7, namePlace: 'School' },
      ],
    },
  },
  {
    id: 9,
    place: 'University',
    img: 'https://www.uzbek-travel.com/images/uz/Cities/Karshi/karshi11.jpg',
    info: {
      headTitle: 'See all advertisements',
      restaurantPlaces: [
        { id: 1, namePlace: 'University' },
        { id: 2, namePlace: 'University' },
        { id: 3, namePlace: 'University' },
        { id: 4, namePlace: 'University' },
        { id: 5, namePlace: 'University' },
        { id: 6, namePlace: 'University' },
        { id: 7, namePlace: 'University' },
      ],
    },
  },
  {
    id: 9,
    place: 'Supermarket',
    img: 'https://www.uzbek-travel.com/images/uz/Cities/Karshi/karshi11.jpg',
    info: {
      headTitle: 'See all advertisements',
      restaurantPlaces: [
        { id: 1, namePlace: 'Supermarket' },
        { id: 2, namePlace: 'Supermarket' },
        { id: 3, namePlace: 'Supermarket' },
        { id: 4, namePlace: 'Supermarket' },
        { id: 5, namePlace: 'Supermarket' },
        { id: 6, namePlace: 'Supermarket' },
        { id: 7, namePlace: 'Supermarket' },
      ],
    },
  },
];

export function MiniCategory() {
 const [selectedImage, setSelectedImage] =
   useState(null);

 return (
   <div className={style['cards-wrapper']}>
     {selectedImage && (
       <CardItems cards={selectedImage} />
     )}

     {category.map(({ img, place, id, info }) => (
       <div
         key={id}
         className={style['cards-item']}
         onClick={() => setSelectedImage(info)}
       >
         <div className={style['card-img']}>
           <img src={img} alt={place} />
         </div>
         <p>{place}</p>
       </div>
     ))}
   </div>
 );
}
