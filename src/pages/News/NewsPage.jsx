import classNames from 'classnames';
import style from './news-page.module.scss';
import {
  NewsCard,
  Pagination,
  Select,
} from '../../components';
import { newsCardData } from '../../utils/mock';

export function NewsPage() {
  return (
    <div
      className={classNames(style['news-page'])}
    >
      <section
        className={classNames(
          style['promo-section'],
        )}
      >
        <h1>The latest news from your city!</h1>
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
            component={<NewsCard />}
            componentData={newsCardData}
          />
        </div>
      </section>
    </div>
  );
}
