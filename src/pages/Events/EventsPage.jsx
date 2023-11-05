import classNames from 'classnames';
import {
  Pagination,
  Select,
} from '../../components';
import EventsCard from '../../components/Cards/EventsCard/EventsCard';
import style from './events.module.scss';

export function EventsPage() {
  return (
    <main
      className={classNames(
        style.container,
        style['events-page'],
      )}
    >
      <section
        className={classNames(
          style['promo-section'],
        )}
      >
        <h1>don't miss city events!</h1>
        <p>
          Discover the diversity of our city,
          where history, culture, nature and
          entertainment combine in a unique way.
        </p>
      </section>
      <section
        className={classNames(
          style['cards-sorted'],
        )}
      >
        <div className={classNames(style.sorted)}>
          <Select />
        </div>
        <div className={classNames(style.cards)}>
          <Pagination
            component={<EventsCard />}
          />
        </div>
      </section>
    </main>
  );
}
