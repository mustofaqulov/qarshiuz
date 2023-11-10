/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Button } from '../Button/Button';
import { links } from '../../utils';
import AddIcon from '../../assets/icons/add-icon-white.svg';
import Logo from '../../assets/icons/logo.svg';

export function Navbar() {
  return (
    <nav className={classNames(style.nav)}>
      <div
        className={classNames(
          style['nav-wrapper'],
          'container',
        )}
      >
        <Link to="/" className={style.logo}>
          <Logo />
        </Link>
        <ul className={style['nav-list']}>
          {links.map(({ to, title }) => (
            <li key={to}>
              <NavLink to={to}>{title}</NavLink>
            </li>
          ))}
          <li>
            <Button
              btnClass="primary"
              title="Add new"
              icon={<AddIcon />}
            />
          </li>
          <li>
            <Tab />
          </li>
        </ul>
      </div>
    </nav>
  );
}
