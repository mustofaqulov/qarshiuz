import { useState } from 'react';
import classNames from 'classnames';
import {
  Button,
  SearchInput,
} from '../../components';
import { CategoryCard } from '../../components/Cards/CategoryCard/CategoryCard';
import { recommendationCardData } from '../../utils';
// import Sele
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

export function CategoryPage() {
  const [close, setClose] = useState(false);
  return (
    <div className={classNames(style.category)}>
      <div
        className={classNames(
          style['category-title'],
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
        <SearchInput placeholder="Events" />
      </div>
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
            btnClass="sm"
          />
        ))}
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
        </div>
        <div className={classNames(style.cards)}>
          {recommendationCardData.map(
            ({
              id,
              cardImg,
              title,
              location,
            }) => (
              <CategoryCard
                key={id}
                cardImg={cardImg}
                title={title}
                location={location}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
