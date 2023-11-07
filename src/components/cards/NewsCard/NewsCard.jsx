import classNames from 'classnames';
import style from './news-card.module.scss';
import EyesBlackIcon from '../../../assets/icons/eye-black-icon.svg';

export function NewsCard({
  status,
  title,
  description,
  slideImg,
}) {
  return (
    <div
      className={classNames(style['news-card'])}
    >
      <div
        className={classNames(style['card-img'])}
      >
        <img src={slideImg} alt="" />
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
