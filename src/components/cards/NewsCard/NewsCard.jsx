import classNames from 'classnames';
import style from './news-card.module.scss';
import EyesBlackIcon from '../../../assets/icons/eye-black-icon.svg';

export function NewsCard() {
  return (
    <div
      className={classNames(style['news-card'])}
    >
      <img src="" alt="" />
      <div
        className={classNames(style['card-info'])}
      >
        <div
          className={classNames(
            style['news-info'],
          )}
        >
          <span>local</span>
          <div
            className={classNames(
              style['news-about'],
            )}
          >
            <h5>Opening of a new park!</h5>
            <p>
              We are pleased to announce that a
              new amusement park has opened in the
              center of our city, which promises
              to become one of the main
              attractions for locals and tourists.
            </p>
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
