import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './modals.module.scss';
import { Button } from '../../Button/Button';
import Search from '../../../assets/icons/search.svg';

export function Modals({ open, close }) {
  const categories = [
    {
      url: 'https://img.freepik.com/free-photo/3d-rendering-modern-loft-gym-and-fitness_105762-2020.jpg?w=1060&t=st=1705419173~exp=1705419773~hmac=a47d1c5a5de535ddda09960f33b3d9f78666b0bb53ebdbee50ae869e4536d420 ',
      text: 'Sport club',
      id: 1,
    },
    {
      url: 'https://img.freepik.com/free-photo/3d-rendering-modern-loft-gym-and-fitness_105762-2020.jpg?w=1060&t=st=1705419173~exp=1705419773~hmac=a47d1c5a5de535ddda09960f33b3d9f78666b0bb53ebdbee50ae869e4536d420 ',
      text: 'Sport club',
      id: 2,
    },
    {
      url: 'https://img.freepik.com/free-photo/3d-rendering-modern-loft-gym-and-fitness_105762-2020.jpg?w=1060&t=st=1705419173~exp=1705419773~hmac=a47d1c5a5de535ddda09960f33b3d9f78666b0bb53ebdbee50ae869e4536d420 ',
      text: 'Sport club',
      id: 3,
    },
  ];

  if (!open) return null;

  return (
    <div className={style['modal-search']}>
      <div
        onClick={close}
        className={style['overlay-modal']}
      >
        {}
      </div>
      <div className={style['modal-content']}>
        <label id="search">
          <div className={style['search-box']}>
            <Search />
            <input
              autocomplete="off"
              id="search"
              type="text"
              placeholder="Search events, tags and markets"
            />
            <Button
              btnClass="primary"
              title="search"
            />
          </div>
        </label>

        <div
          className={style['category-section']}
        >
          <p>Categories</p>
        </div>
        {categories.map(({ url, text, id }) => {
          return (
            <div
              className={style['card-item']}
              key={id}
            >
              <img src={url} alt={text} />
              <p>{text}</p>
            </div>
          );
        })}
        <div
          className={style['category-section']}
        >
          <p>Tags</p>
        </div>
        <div
          className={classNames(
            style['tags-section'],
          )}
        >
          <p>
            <span>#</span> Sport
          </p>
          <p>
            <span>#</span> Sport
          </p>
          <p>
            <span>#</span> Sport
          </p>
        </div>
        <div
          className={style['category-section']}
        >
          <p>Result</p>
        </div>
        <div className={style['category-box']}>
          {categories.map(({ url, text, id }) => {
            return (
              <div
                className={style['card-item']}
                key={id}
              >
                <img src={url} alt={text} />
                <p>{text}</p>
              </div>
            );
          })}
        </div>
        <div className={style['section-contnet']}>
          <h3>Jony concert Karshi</h3>
          <p>October 25, 2023 (Stadion Nasaf)</p>
        </div>
        <div className={style['section-contnet']}>
          <h3>Jony concert Karshi</h3>
          <p>October 25, 2023 (Stadion Nasaf)</p>
        </div>
        <div className={style['section-contnet']}>
          <h3>
            Uzbektelecom reduces prices for
            external Internet channel
          </h3>
          <p>
            For lovers of art and culture, the
            park hosts exhibitions of modern
            sculptures and installations, as wel
          </p>
        </div>
      </div>
    </div>
  );
}

Modals.defaultProps = {
  open: '',
  close: '',
};

Modals.propTypes = {
  open: PropTypes.func,
  close: PropTypes.func,
};
