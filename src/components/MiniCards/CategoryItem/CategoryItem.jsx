import { Link } from 'react-router-dom';
import PropTypes, { string } from 'prop-types';
import style from './categoryItem.module.scss';

function CategoryItem({ icons, title }) {
  return (
    <Link
      className={style['mini-container']}
      to="/"
    >
      {icons}
      <p className={style['info-title']}>
        {title}
      </p>
    </Link>
  );
}
export default CategoryItem;

CategoryItem.defaultProps = {
  icons: null,
  title: string,
};
CategoryItem.propTypes = {
  icons: PropTypes.node,
  title: PropTypes.string,
};
