import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CornerLeft from '../../../../assets/icons/corner-left.svg';
import style from '../small-card.module.scss';

function CardItems({ cards }) {
  return (
    <div className={style.subcategory}>
      <p>
        <CornerLeft />
        <strong>See all advertisements </strong>
        <span>in Restaurants</span>
      </p>
      <ul>
        {cards.restaurantPlaces.map(
          ({ id, namePlace }) => {
            return (
              <li key={id}>
                <CornerLeft />
                <Link to="/">{namePlace}</Link>
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
}

CardItems.defaultProps = {
  cards: [],
};

CardItems.propTypes = {
  cards: PropTypes.oneOf(['array']),
};
export default CardItems;
