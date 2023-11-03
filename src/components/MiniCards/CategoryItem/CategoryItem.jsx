import { Link } from 'react-router-dom';
import PropTypes, { string } from 'prop-types';
import style from './categoryItem.module.scss';

function CategoryItem({ icons, title }) {
  return (
    <Link
      className={style['mini-container']}
      to="/"
    >
      <img
        className={style['complete-info']}
        src={icons}
        alt=""
      />
      <p className={style['info-title']}>
        {title}
      </p>
    </Link>
  );
}
export default CategoryItem;

CategoryItem.defaultProps = {
  icons: string,
  title: string,
};
CategoryItem.propTypes = {
  icons: PropTypes.string,
  title: PropTypes.string,
};
