import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './category-card.module.scss';
import LocationIcon from '../../../assets/icons/location-gray.svg';
import SideArrowIcon from '../../../assets/icons/side-arrow.svg';

export function CategoryCard({
  cardImg,
  title,
  location,
}) {
  return (
    <Link
      to="/category"
      className={classNames(
        style['category-card'],
      )}
    >
      {/* <div
        className={classNames(
          style['category-card'],
        )}
      >
      </div> */}
      <div
        className={classNames(
          style['category-status'],
        )}
      >
        <div
          className={classNames(
            style['status-name'],
          )}
        >
          <span>top</span>
        </div>
        <div
          className={classNames(
            style['card-img'],
          )}
        >
          <div
            className={classNames(
              style['card-color'],
            )}
          />
          <img src={cardImg} alt="" />
        </div>
      </div>
      <div
        className={classNames(
          style['category-info'],
        )}
      >
        <h5>{title}</h5>
        <div
          className={classNames(
            style['category-location'],
          )}
        >
          <div
            className={classNames(
              style['location-info'],
            )}
          >
            <LocationIcon />
            <span>{location}</span>
          </div>
          <Link to="/category">
            <SideArrowIcon />
          </Link>
        </div>
      </div>
    </Link>
  );
}

CategoryCard.defaultProps = {
  cardImg: '',
  title: '',
  location: '',
};
CategoryCard.propType = {
  cardImg: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
};
