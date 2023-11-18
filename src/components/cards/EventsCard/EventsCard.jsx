import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './events-card.module.scss';
import LocationIcon from '../../../assets/icons/location-gray.svg';
import SideArrowIcon from '../../../assets/icons/side-arrow.svg';

export function EventsCard({ cardInfo }) {
  const {
    status,
    date,
    title,
    location,
    cardImg,
  } = cardInfo;
  return (
    <div
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
            <SideArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

EventsCard.defaultProps = {
  cardInfo: null,
};
EventsCard.propTypes = {
  cardInfo: PropTypes.shape({
    status: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    cardImg: PropTypes.string,
  }),
};
