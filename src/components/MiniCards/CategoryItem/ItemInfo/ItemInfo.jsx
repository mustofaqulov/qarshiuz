import CategoryItem from '../CategoryItem';
import DirectionIcon from '../../../../assets/icons/corner-left.svg';
import style from './itemInfo.module.scss';
import Advertisements from './Advertisements';

export default function App() {
  return (
    <div className={style['mini-blog']}>
      <Advertisements />
      <div className={style['mini-blogs']}>
        <CategoryItem
          icons={DirectionIcon}
          title="Chayxana"
        />
        <CategoryItem
          icons={DirectionIcon}
          title="Restaurants"
        />
        <CategoryItem
          icons={DirectionIcon}
          title="Cafe"
        />

        <CategoryItem
          icons={DirectionIcon}
          title="Chayxana"
        />
        <CategoryItem
          icons={DirectionIcon}
          title="Restaurants"
        />
        <CategoryItem
          icons={DirectionIcon}
          title="Restaurants"
        />
        <CategoryItem
          icons={DirectionIcon}
          title="Bakery"
        />
        <CategoryItem
          icons={DirectionIcon}
          title="Entertainment"
        />
        <CategoryItem
          icons={DirectionIcon}
          title="Bakery"
        />
        <CategoryItem
          icons={DirectionIcon}
          title="ATM"
        />
        <CategoryItem
          icons={DirectionIcon}
          title="School"
        />
        <CategoryItem
          icons={DirectionIcon}
          title="Bakery"
        />
        <CategoryItem
          icons={DirectionIcon}
          title="University"
        />
        <CategoryItem
          icons={DirectionIcon}
          title="University"
        />
        <CategoryItem
          icons={DirectionIcon}
          title="Bakery"
        />
      </div>
    </div>
  );
}
