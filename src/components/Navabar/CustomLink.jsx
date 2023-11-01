import { Link, useMatch } from 'react-router-dom';

export function CustomLink({
  to,
  children,
  ...props
}) {
  const match = useMatch(to);
  const activeClass = {
    padding: match ? '16px 28px' : '',
    borderRadius: match ? '36px' : '',
    border: match
      ? '1px solid var(--clr-primary-dk)'
      : '',
  };
  return (
    <Link to={to} {...props} style={activeClass}>
      {children}
    </Link>
  );
}
