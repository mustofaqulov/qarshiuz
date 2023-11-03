import CategoryItem from '../CategoryItem';
import InfoIcons from '../../../../assets/icons/corner-left.svg';
import style from './itemInfo.module.scss';
import Advertisements from './Advertisements';

export default function App() {
  return (
    <div className={style['mini-blog']}>
      <Advertisements />
      <div className={style['mini-blogs']}>
        <CategoryItem
          icons={InfoIcons}
          title="Chayxana"
        />
        <CategoryItem
          icons={InfoIcons}
          title="Restaurants"
        />
        <CategoryItem
          icons={InfoIcons}
          title="Cafe"
        />
        <CategoryItem
          icons={InfoIcons}
          title="Chayxana"
        />
        <CategoryItem
          icons={InfoIcons}
          title="Restaurants"
        />
        <CategoryItem
          icons={InfoIcons}
          title="Restaurants"
        />
        <CategoryItem
          icons={InfoIcons}
          title="Bakery"
        />
        <CategoryItem
          icons={InfoIcons}
          title="Entertainment"
        />
        <CategoryItem
          icons={InfoIcons}
          title="Bakery"
        />
        <CategoryItem
          icons={InfoIcons}
          title="ATM"
        />
        <CategoryItem
          icons={InfoIcons}
          title="School"
        />
        <CategoryItem
          icons={InfoIcons}
          title="Bakery"
        />
        <CategoryItem
          icons={InfoIcons}
          title="University"
        />
        <CategoryItem
          icons={InfoIcons}
          title="University"
        />
        <CategoryItem
          icons={InfoIcons}
          title="Bakery"
        />
      </div>
    </div>
  );
}
