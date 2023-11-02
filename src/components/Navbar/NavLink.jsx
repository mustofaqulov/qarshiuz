import PropTypes from 'prop-types';
import { Link, useMatch } from 'react-router-dom';
import style from './navbar.module.scss';

export function NavLink({
  to,
  children,
  ...props
}) {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={[match && style.active]}
    >
      {children}
    </Link>
  );
}

NavLink.defaultProps = {
  to: '',
  children: null,
  props: null,
};

NavLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  props: PropTypes.node,
};
