import { Link } from 'react-router-dom';
import PropTypes, { string } from 'prop-types';
import style from './category-list.module.scss';

function CategoryList({ icons, title }) {
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
export default CategoryList;

CategoryList.defaultProps = {
  icons: null,
  title: string,
};
CategoryList.propTypes = {
  icons: PropTypes.node,
  title: PropTypes.string,
};
