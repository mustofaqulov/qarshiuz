import { Link } from 'react-router-dom';
import CategoryItem from '../CategoryItem';
import DirectionIcon from '../../../../assets/icons/corner-left.svg';
import style from './itemInfo.module.scss';

export default function App() {
  return (
    <div className={style['mini-blog']}>
      <Link to="/" className={style['mini-box']}>
        <DirectionIcon />
        <p
          className={style['mini-advertisements']}
        >
          See all advertisements
        </p>
        <p className={style['category-name']}>
          in Restaurants
        </p>
      </Link>
      <div className={style['mini-blogs']}>
        <CategoryItem
          icons={<DirectionIcon />}
          title="Chayxana"
        />
        <CategoryItem
          icons={<DirectionIcon />}
          title="Restaurants"
        />
        <CategoryItem
          icons={<DirectionIcon />}
          title="Cafe"
        />

        <CategoryItem
          icons={<DirectionIcon />}
          title="Chayxana"
        />
        <CategoryItem
          icons={<DirectionIcon />}
          title="Restaurants"
        />
        <CategoryItem
          icons={<DirectionIcon />}
          title="Restaurants"
        />
        <CategoryItem
          icons={<DirectionIcon />}
          title="Bakery"
        />
        <CategoryItem
          icons={<DirectionIcon />}
          title="Entertainment"
        />
        <CategoryItem
          icons={<DirectionIcon />}
          title="Bakery"
        />
        <CategoryItem
          icons={<DirectionIcon />}
          title="ATM"
        />
        <CategoryItem
          icons={<DirectionIcon />}
          title="School"
        />
        <CategoryItem
          icons={<DirectionIcon />}
          title="Bakery"
        />
        <CategoryItem
          icons={<DirectionIcon />}
          title="University"
        />
        <CategoryItem
          icons={<DirectionIcon />}
          title="University"
        />
        <CategoryItem
          icons={<DirectionIcon />}
          title="Bakery"
        />
      </div>
    </div>
  );
}
