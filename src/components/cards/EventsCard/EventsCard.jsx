import classNames from 'classnames';
import style from './events-card.module.scss';
import LocationIcon from '../../../assets/icons/location-gray.svg';
import SideArrowIcon from '../../../assets/icons/side-arrow.svg';

function EventsCard({
  status,
  date,
  title,
  location,
  cardImg,
}) {
  return (
    <div
      className={classNames(style['events-card'])}
    >
      <div
        className={classNames(style['card-img'])}
      >
        <img src={cardImg} alt="" />
      </div>
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
          <span>{status}</span>
          <span>{date}</span>
        </div>
        <div
          className={classNames(
            style['event-about'],
          )}
        >
          <h5>{title}</h5>
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
              <span>{location}</span>
            </div>
            <SideArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
