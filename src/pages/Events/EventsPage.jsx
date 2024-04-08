import classNames from 'classnames';
import style from './events-page.module.scss';
import {
  EventsCard,
  Pagination,
  Select,
} from '../../components';
import { eventsCardData } from '../../utils/mock';

export function EventsPage() {
  return (
    <div
      className={classNames(style['events-page'])}
    >
      <section
        className={classNames(
          style['promo-section'],
          style.container,
        )}
      >
        <h1>don&rsquo;t miss city events!</h1>
        <p>
          Discover the diversity of our city,
          where history, culture, nature and
          entertainment combine in a unique way.
        </p>
      </section>
      <section
        className={classNames(
          style['cards-sorted'],
          style.container,
        )}
      >
        <div className={classNames(style.sorted)}>
          <Select />
        </div>
        <Pagination
          component={<EventsCard />}
          componentData={eventsCardData}
        />
        {/* <div className={classNames(style.cards)}>
        </div> */}
      </section>
    </div>
  );
}
