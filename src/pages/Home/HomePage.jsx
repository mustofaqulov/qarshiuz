import classNames from 'classnames';
import {
  Button,
  Input,
  PromoSlider,
  RecommendationSlider,
  NewsSlider,
  EventsSlider,
  MiniCards,
  // sliderData,
} from '../../components';

import style from './home-page.module.scss';

const sliderData = [
  {
    id: 1,
    title: 'Our recommendations',
    component: <RecommendationSlider />,
  },
  {
    id: 2,
    title: 'city news in one place',
    component: <NewsSlider />,
  },
  {
    id: 3,
    title: 'exciting events in the city',
    component: <EventsSlider />,
  },
];
export function HomePage() {
  return (
    <main className={classNames(style.container)}>
      <section
        className={classNames(
          style['promo-section'],
        )}
      >
        <div
          className={classNames(
            style['region-name'],
          )}
        >
          <select name="" id="">
            <option value="Kashqadarya region">
              Kashqadarya region
            </option>
          </select>
          <h1>
            Information portal <br /> of Qarshi
            city
          </h1>
        </div>
        <div
          className={classNames(
            style['promo-about'],
          )}
        >
          <p>
            A portal that helps you find places in
            the city. You can get information
            about pharmacies, hospitals,
            restaurants and cafes
          </p>
          <div
            className={classNames(
              style['promo-search'],
            )}
          >
            <div
              className={classNames(
                style['input-button'],
              )}
            >
              <Input />
              <Button
                btnClass="primary"
                title="search"
              />
            </div>
            <div
              className={classNames(
                style['promo-category'],
              )}
            >
              <Button
                btnClass="secondary"
                title="Events"
              />
              <Button
                btnClass="secondary"
                title="Banks"
              />
              <Button
                btnClass="secondary"
                title="Bars"
              />
              <Button
                btnClass="secondary"
                title="Museum"
              />
            </div>
          </div>
        </div>
        <PromoSlider />
      </section>
      <section className="category">
        <MiniCards />
      </section>
      {sliderData.map((slider) => {
        const { id, title, component } = slider;
        return (
          <section
            key={id}
            className={classNames(
              style['slider-section'],
            )}
          >
            <h3>{title}</h3>
            <div className="slide">
              {component}
            </div>
          </section>
        );
      })}
    </main>
  );
}
