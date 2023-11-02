import PropTypes from 'prop-types';
import { Link, useMatch } from 'react-router-dom';
import style from './footer.module.scss';

export function FooterLinks({
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

FooterLinks.defaultProps = {
  to: '',
  children: null,
  props: null,
};

FooterLinks.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  props: PropTypes.node,
};
