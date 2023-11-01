import { Link, useMatch } from 'react-router-dom';
import style from './navbar.module.scss';

export function CustomLink({
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
