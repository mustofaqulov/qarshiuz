import ArrowIcons from '../../../assets/icons/arrow-up-white.svg';
import { Button } from '../../../components';
import style from './not-found.scss';

export default function PageNotfound() {
  return (
    <div className={style.blog}>
      <h1 className={style.notfound}>404</h1>
      <p className={style.notpage}>
        Oops, Sorry we can't find that page!
      </p>
      <p className={style.unavailable}>
        The page you are looking for might have
        been removed, had its name changed, or is
        temporarily unavailable.
      </p>
      <Button
        className="btn"
        btnClass="primary"
        title="Back to home"
        icon={<ArrowIcons />}
      />
    </div>
  );
}
