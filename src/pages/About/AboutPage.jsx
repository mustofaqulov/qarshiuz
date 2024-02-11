import classNames from 'classnames';
import { PromoSlider } from '../../components';
import Facebook from '../../assets/icons/facebook-black.svg';
import Telegram from '../../assets/icons/telegram-black.svg';
import Vkontakte from '../../assets/icons/vkontakte-black.svg';
import Twitter from '../../assets/icons/twitter-icon.svg';
import style from './about-page.module.scss';
import { aboutData } from '../../utils/mock';

export function AboutPage() {
  return (
    <div
      className={classNames(
        'container',
        style['about-page'],
      )}
    >
      <h1 className={classNames(style.title)}>
        About the city of Karshi
      </h1>
      <PromoSlider />
      <div className={classNames(style.about)}>
        {aboutData.map((item) => (
          <p
            key={item.id}
            className={classNames(
              style['text-container'],
              style.text,
            )}
          >
            {item.data}
          </p>
        ))}
      </div>
      <div
        className={classNames(
          style['text-container'],
          style['about-footer'],
        )}
      >
        <div className={classNames(style.icons)}>
          <Facebook />
          <Telegram />
          <Vkontakte />
          <Twitter />
        </div>
        <p className={classNames(style.source)}>
          Source:{' '}
          <a href="https://uzbekistan.travel/ru/">
            uzbek-travel.com
          </a>
        </p>
      </div>
    </div>
  );
}
