import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './events-card.module.scss';
import LocationIcon from '../../../assets/icons/location-gray.svg';
import SideArrowIcon from '../../../assets/icons/side-arrow.svg';

export function EventsCard({
  cardImg,
  status,
  date,
  title,
  location,
}) {
  return (
    <Link
      to="/events"
      className={classNames(style['events-card'])}
    >
      <div
        className={classNames(style['card-img'])}
      >
        <div
          className={classNames(
            style['card-color'],
          )}
        />
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
            <Link to="/events">
              <SideArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}

EventsCard.defaultProps = {
  cardImg: '',
  status: '',
  date: '',
  title: '',
  location: '',
};
EventsCard.propType = {
  cardImg: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
};
