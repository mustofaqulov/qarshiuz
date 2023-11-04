import classNames from 'classnames';
import {
  Button,
  Navbar,
  Input,
  PromoSlider,
  NewsSlider,
  RecommendationSlider,
  EventsSlider,
  Footer,
} from '../../components';
import style from './home-page.module.scss';

export function HomePage() {
  return (
    <>
      <Navbar />
      <main className="container">
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
              A portal that helps you find places
              in the city. You can get information
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
        <section
          className={classNames(
            style['slider-section'],
          )}
        >
          <h3>Our recommendations</h3>
          <div className="slide">
            <RecommendationSlider />
          </div>
        </section>
        <section
          className={classNames(
            style['slider-section'],
          )}
        >
          <h3>city news in one place</h3>
          <div className="slide">
            <NewsSlider />
          </div>
        </section>
        <section
          className={classNames(
            style['slider-section'],
          )}
        >
          <h3>EXCITING EVENTS In THE CITY</h3>
          <div className="slide">
            <EventsSlider />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
