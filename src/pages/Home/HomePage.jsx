import classNames from 'classnames';
import {
  Button,
  SearchInput,
  PromoSlider,
  MiniCategory,
  sliderData,
  PromoButtonsSlide,
} from '../../components';
import style from './home-page.module.scss';
import SelectIcon from '../../assets/icons/angle-down.svg';
import { smallBtnData } from '../../utils/mock';
import { useEffect, useState } from 'react';
import { Modals } from '../../components/Modals/SearchModals/Modals';

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen
      ? 'hidden'
      : 'auto';
  }, [isOpen]);
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
            style['region-name'],
          )}
        >
          <div
            className={classNames(style.regions)}
          >
            <strong>Kashqadarya region</strong>
            <SelectIcon />
          </div>
          <h1>
            Information portal of Qarshi city
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
              <Modals
                open={isOpen}
                close={() => setIsOpen(false)}
              />
              <div
                className={style['btn-box']}
                onClick={() => setIsOpen(true)}
              >
                <label for="btn">
                  <SearchInput placeholder="Events" />
                </label>
              </div>
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
        <MiniCategory />
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
    </div>
  );
}
