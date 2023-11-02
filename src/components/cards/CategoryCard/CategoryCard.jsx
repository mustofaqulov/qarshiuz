import classNames from 'classnames';
import style from './category-card.module.scss';
import LocationIcon from '../../../assets/icons/location-gray.svg';
import SideArrowIcon from '../../../assets/icons/side-arrow.svg';

export function CategoryCard() {
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
        <div
          className={classNames(
            style['status-name'],
          )}
        >
          <span>top</span>
        </div>
        <img src="" alt="" />
      </div>
      <div
        className={classNames(
          style['category-info'],
        )}
      >
        <h5>Aroma</h5>
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
            <span>
              Uzbekistan street, Karshi 180100,
              Uzbekistan
            </span>
          </div>
          <SideArrowIcon />
        </div>
      </div>
    </div>
  );
}
