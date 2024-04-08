import { useState } from 'react';
import CornerLeft from '../../../../assets/icons/corner-left.svg';
import style from '../small-card.module.scss';

function CardItems(props) {
  const data = props.cards;
  return (
    <div className={style.subcategory}>
      <p>
        <CornerLeft />
        <strong>See all advertisements </strong>
        <span>in Restaurants</span>
      </p>

      <ul>
        {data['restaurantPlaces'].map(
          ({ id, namePlace }) => {
            return (
              <li key={id}>
                <li key={id}>
                  <CornerLeft />
                  {/* <Link to={'/'}> */}
                  <strong>{namePlace}</strong>
                </li>
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
}

function CategoryItem(props) {
  const category = props.info;
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

export default CardItems;
