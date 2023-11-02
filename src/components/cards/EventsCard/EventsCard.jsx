import classNames from 'classnames';
import style from './events-card.module.scss';
import LocationIcon from '../../../assets/icons/location-gray.svg';
import SideArrowIcon from '../../../assets/icons/side-arrow.svg';

function EventsCard() {
  return (
    <div
      className={classNames(style['events-card'])}
    >
      <img src="" alt="" />
      <div
        className={classNames(
          style['event-info'],
        )}
      >
        <div
          className={classNames(
            style['event-date'],
          )}
        >
          <span>Concert</span>
          <span>Octaber 15, 2023</span>
        </div>
        <div
          className={classNames(
            style['event-about'],
          )}
        >
          <h5>Solo concert of jony Karshi</h5>
          <div
            className={classNames(
              style['event-location'],
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
    </div>
  );
}

export default EventsCard;
