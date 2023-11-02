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
      {...props}
      className={[match && style.active]}
    >
      {children}
    </Link>
  );
}
