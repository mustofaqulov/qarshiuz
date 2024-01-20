import classNames from 'classnames';
import {
  Button,
  SearchInput,
  PromoSlider,
  MiniCategory,
  sliderData,
  SubTag,
} from '../../components';
import style from './home-page.module.scss';
import { smallBtnData } from '../../utils/mock';

export function HomePage() {
  return (
    <div
      className={classNames(style['home-page'])}
    >
      <section
        className={classNames(
          style['promo-section'],
        )}
      >
        <div
          className={classNames(
            style['promo-about'],
            style.container,
          )}
        >
          <h1>
            Information portal of Qarshi city
          </h1>
          <div
            className={classNames(style.about)}
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
                <SearchInput placeholder="Events" />
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
                      <SubTag
                        key={id}
                        tagClass="sub-tag"
                        title={title}
                      />
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            style['promo-slider'],
            style.container,
          )}
        >
          <PromoSlider />
        </div>
      </section>
      <section className="container">
        <MiniCategory />
      </section>
      {sliderData.map((slider) => {
        const { id, title, component } = slider;
        return (
          <section
            key={id}
            className={classNames(
              style['slider-section'],
              style.container,
            )}
          >
            <h3>{title}</h3>
            <div className="slide">
              {component}
            </div>
          </section>
        );
      })}
    </div>
  );
}
