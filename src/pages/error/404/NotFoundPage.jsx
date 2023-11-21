import { Link } from 'react-router-dom';
import ArrowIcons from '../../../assets/icons/arrow-up-white.svg';
import { Button } from '../../../components';
import style from './not-found.module.scss';

export function NotFoundPage() {
  return (
    <div className={style['notfound-blog']}>
      <h1>404</h1>
      <h2 className={style['notfound-title']}>
        Oops, Sorry we can &#39;t find that page!
      </h2>
      <p
        className={style['notfound-description']}
      >
        The page you are looking for might have
        been removed, had its name changed, or i
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
