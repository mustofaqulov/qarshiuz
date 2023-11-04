import { Link } from 'react-router-dom';
import CategoryList from '../CategoryList';
import InfoIcons from '../../../../assets/icons/corner-left.svg';
import style from './description.module.scss';

function Description() {
  return (
    <div className={style['mini-blog']}>
      <Link to="/" className={style['mini-box']}>
        <InfoIcons />
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
        <CategoryList
          icons={InfoIcons}
          title="Chayxana"
        />
        <CategoryList
          icons={InfoIcons}
          title="Restaurants"
        />
        <CategoryList
          icons={InfoIcons}
          title="Cafe"
        />
        <CategoryList
          icons={InfoIcons}
          title="Chayxana"
        />
        <CategoryList
          icons={InfoIcons}
          title="Restaurants"
        />
        <CategoryList
          icons={InfoIcons}
          title="Restaurants"
        />
        <CategoryList
          icons={InfoIcons}
          title="Bakery"
        />
        <CategoryList
          icons={InfoIcons}
          title="Entertainment"
        />
        <CategoryList
          icons={InfoIcons}
          title="Bakery"
        />
        <CategoryList
          icons={InfoIcons}
          title="ATM"
        />
        <CategoryList
          icons={InfoIcons}
          title="School"
        />
        <CategoryList
          icons={InfoIcons}
          title="Bakery"
        />
        <CategoryList
          icons={InfoIcons}
          title="University"
        />
        <CategoryList
          icons={InfoIcons}
          title="University"
        />
        <CategoryList
          icons={InfoIcons}
          title="Bakery"
        />
      </div>
    </div>
  );
}
export default Description;
