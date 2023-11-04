import PropTypes, { string } from 'prop-types';
import style from './MiniCards.module.scss';

export function MiniCards({ img, title }) {
  return (
    <div className={style['mini-container']}>
      <div className={style['image-container']}>
        <img
          className={style['mini-card']}
          src={img}
          alt="img"
        />
      </div>
      <div className={style['card-title']}>
        <p>{title}</p>
      </div>
    </div>
  );
}

MiniCards.defaultProps = {
  img: string,
  title: string,
};
MiniCards.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};
