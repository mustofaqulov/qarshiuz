import { useState } from 'react';
import CardItems from './CategoryItem/CategoryItem';

import style from './small-card.module.scss';
import { category } from '../../../utils/mock';

export function MiniCategory() {
  const [selectedImage, setSelectedImage] =
    useState(null);

  const handleImageClick = (info) => {
    setSelectedImage((prevSelectedImage) =>
      prevSelectedImage === info ? null : info,
    );
  };
  return (
    <div className={style['cards-wrapper']}>
      {selectedImage && (
        <CardItems cards={selectedImage} />
      )}

      {category.map(
        ({ img, place, id, info }) => (
          <button
            key={id}
            className={style['cards-item']}
            onClick={() => handleImageClick(info)}
          >
            <div className={style['card-img']}>
              <img src={img} alt={place} />
            </div>
            <p>{place}</p>
          </button>
        ),
      )}
    </div>
  );
}
