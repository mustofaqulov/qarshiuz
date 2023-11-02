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
      {...props}
      className={[match && style.active]}
    >
      {children}
    </Link>
  );
}
