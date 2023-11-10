import { Link } from 'react-router-dom';
import style from './page.module.scss';
import ArrowIcons from '../assets/icons/arrow-up-white.svg';
import { Button } from '../components/Button/Button';

export default function Notfound() {
  return (
    <div className={style['blog-found']}>
      <p className={style['not-found']}>404</p>
      <p className={style['not-page']}>
        Oops, Sorry we can &apos;t find that page!
      </p>
      <p className={style['notfound-title']}>
        The page you are looking for might hgiave
        been removed, had its name changed, or is
        temporarily unavailable.
      </p>
      <Link to="/">
        <Button
          className="btn"
          btnClass="primary"
          title="Back to home"
          icon={<ArrowIcons />}
        />
      </Link>
    </div>
  );
}
