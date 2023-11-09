import classNames from 'classnames';
import { useState } from 'react';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { CategoryCard } from '../../components/Cards/CategoryCard/CategoryCard';
import { Select } from '../../components/Select/Select';
import CategoryMenuIcon from '../../assets/icons/categorys-menu.svg';
import ClouseIcon from '../../assets/icons/clouse-icon-white.svg';
import FilterIcon from '../../assets/icons/filter-white.svg';
import style from './category.module.scss';

const btnData = [
  {
    id: 1,
    title: 'Restaurant',
  },
  {
    id: 2,
    title: 'Hotel',
  },
  {
    id: 3,
    title: 'Sport club',
  },
  {
    id: 4,
    title: 'Sport club',
  },
  {
    id: 5,
    title: 'Bar',
  },
  {
    id: 6,
    title: 'Library',
  },
  {
    id: 7,
    title: 'Banks',
  },
  {
    id: 8,
    title: 'Sport club',
  },
];

export function Category() {
  const [close, setClose] = useState(false);
  const [values, setValues] = useState('');
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
          onClick={() => setClose(!close)}
        >
          {close ? (
            <ClouseIcon />
          ) : (
            <CategoryMenuIcon />
          )}
          <span>Categorys</span>
        </button>
        <Input
          placeholder="Events"
          value={values}
        />
        <Button
          title="Search"
          btnClass="primary"
        />
      </div>
      <div
        className={classNames(
          style['category-fiter-btn'],
        )}
      >
        <div className={classNames(style.btns)}>
          <Button
            title="Filter"
            btnClass="primary"
            icon={<FilterIcon />}
          />
          {btnData.map((btn) => (
            <Button
              key={btn.id}
              title={btn.title}
              btnClass="secondary"
              onClick={(e) =>
                setValues(e.target.value)
              }
            />
          ))}
        </div>
      </div>
      <div className={classNames(style.wrapper)}>
        <div
          className={classNames(style.results)}
        >
          <div
            className={classNames(style.result)}
          >
            <h3>Result</h3>
            <span>45</span>
          </div>
          <div className={classNames(style.sort)}>
            <Select />
          </div>
        </div>
        <div className={classNames(style.cards)}>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  );
}
