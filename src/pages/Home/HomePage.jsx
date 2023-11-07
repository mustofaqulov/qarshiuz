import classNames from 'classnames';
import {
  Button,
  Input,
  PromoSlider,
  MiniComponents,
  sliderData,
} from '../../components';
import { smallBtnData } from '../../utils';
import style from './home-page.module.scss';

export function HomePage() {
  return (
    <main
      className={classNames(
        style.container,
        style['home-page'],
      )}
    >
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
              {smallBtnData.map(
                ({ title, id }) => {
                  return (
                    <Button
                      key={id}
                      btnClass="sm"
                      title={title}
                    />
                  );
                },
              )}
            </div>
          </div>
        </div>
        <PromoSlider />
      </section>
      <section className="category">
        <MiniComponents />
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
