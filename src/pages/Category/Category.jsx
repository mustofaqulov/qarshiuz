import classNames from 'classnames';
import { Input } from '../../components';
import { Button } from '../../components';
import style from './category.module.scss';
// import MenuIcon from '../../assets/icons/menu-icon.svg';

export function Category() {
  return (
    <div className={classNames(style.category)}>
      <div
        className={classNames(
          style['category-info'],
        )}
      >
        <h1>
          Discover the diversity of our city
        </h1>
        <p>
          Discover the diversity of our city,
          where history, culture, nature and
          entertainment combine in a unique way.
        </p>
      </div>
      <div
        className={classNames(
          style['category-search'],
        )}
      >
        <button
          className={classNames(
            style['filter-button'],
          )}
        >
          {/* <MenuIcon /> */}
          <span>Categorys</span>
        </button>
        <Input placeholder="Events" />
        <Button
          title="Search"
          btnClass="primary"
        />
      </div>
    </div>
  );
}
