import { Link } from 'react-router-dom';
import style from './advertisements.module.scss';
import InfoIcons from '../../../../assets/icons/corner-left.svg';

function Advertisements() {
  return (
    <Link to="/" className={style['mini-box']}>
      <img src={InfoIcons} alt="direction" />
      <p className={style['mini-advertisements']}>
        See all advertisements
      </p>
      <p className={style['category-name']}>
        in Restaurants
      </p>
    </Link>
  );
}
export default Advertisements;
