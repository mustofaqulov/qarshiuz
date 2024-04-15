import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './category-card.module.scss';
import LocationIcon from '../../../assets/icons/location-gray.svg';
import SideArrowIcon from '../../../assets/icons/side-arrow.svg';
import FlashIcon from '../../../assets/icons/flash-icon.svg';
import { SubTag } from '../../SubTag/SubTag';

export function CategoryCard({ cardInfo }) {
  const {
    title,
    location,
    cardImg,
    closeStatus,
  } = cardInfo;

  return (
    <div
      className={classNames(
        style['category-card'],
      )}
    >
      <div
        className={classNames(
          style['category-status'],
        )}
      >
        <div className={classNames(style.status)}>
          <SubTag
            tagClass="status-name"
            icon={<FlashIcon />}
            title="top"
          />
          {closeStatus === 'yopiq' ? (
            <SubTag
              tagClass="close-tag"
              title={closeStatus}
            />
          ) : (
            []
          )}
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
          <SideArrowIcon />
        </div>
      </div>
    </div>
  );
}

CategoryCard.defaultProps = {
  cardInfo: null,
};
CategoryCard.propTypes = {
  cardInfo: PropTypes.shape({
    title: PropTypes.string,
    location: PropTypes.string,
    cardImg: PropTypes.string,
    closeStatus: PropTypes.string,
  }),
};
