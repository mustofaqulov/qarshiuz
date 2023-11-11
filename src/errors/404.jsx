import './page404.scss';
import ArrowIcons from '../assets/icons/arrow-up-white.svg';
import { Button } from '../components/Button/Button';

export default function Notfound() {
  return (
    <div className="blog">
      <h1 className="notfound">404</h1>
      <p className="notpage">
        Oops, Sorry we can't find that page!
      </p>
      <p className="unavailable">
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
