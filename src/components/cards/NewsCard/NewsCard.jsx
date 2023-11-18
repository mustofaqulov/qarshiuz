import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './news-card.module.scss';
import EyesBlackIcon from '../../../assets/icons/eye-black-icon.svg';

export function NewsCard({ cardInfo }) {
  const { status, title, description, newsImg } =
    cardInfo;
  return (
    <div
      className={classNames(style['news-card'])}
    >
      <div
        className={classNames(style['card-img'])}
      >
        <div
          className={classNames(
            style['card-color'],
          )}
        />
        <img src={newsImg} alt="" />
      </div>
      <div
        className={classNames(style['card-info'])}
      >
        <div
          className={classNames(
            style['news-info'],
          )}
        >
          <span>{status}</span>
          <div
            className={classNames(
              style['news-about'],
            )}
          >
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
        </div>
        <div
          className={classNames(
            style['news-status'],
          )}
        >
          <span>14h ago </span>
          <div
            className={classNames(
              style['news-watch'],
            )}
          >
            <EyesBlackIcon />
            <span>1240</span>
          </div>
        </div>
      </div>
    </div>
  );
}

NewsCard.defaultProps = {
  cardInfo: null,
};
NewsCard.propTypes = {
  cardInfo: PropTypes.shape({
    status: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    newsImg: PropTypes.string,
  }),
};
