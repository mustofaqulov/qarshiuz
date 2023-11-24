import classNames from 'classnames';
import style from './news-page.module.scss';
import newsImg from '../../assets/images/newsImg.jpg';
import cardImg from '../../assets/images/cardImg.jpg';
import secondImg from '../../assets/images/secondcardImg.jpg';
import Facebook from '../../assets/icons/facebook-black.svg';
import Telegram from '../../assets/icons/telegram-black.svg';
import Vkontakte from '../../assets/icons/vkontakte-black.svg';
import Twitter from '../../assets/icons/twitter-icon.svg';
import { NewsSlider } from '../../components';

const textData = [
  {
    id: 1,
    text: `For lovers of art and culture, the park hosts exhibitions of modern sculptures and installations, as well as open-air concerts and theatrical performances.
    The amusement park has become not only a place for recreation and entertainment, but also a center of social activity for local residents. It hosts charity events, festivals and fairs that promote community development and create a pleasant atmosphere in the city.
    `,
  },
  {
    id: 2,
    text: `We invite you and your loved ones to visit this unique amusement park and plunge into a world of joy and fun. Don't miss the opportunity to spend an unforgettable time with us in our beautiful city!"`,
  },
  {
    id: 3,
    text: `Since March 2023, the process of increasing the speed of mobile Internet and introducing 5G technology throughout the country has begun, the head of the Uzbektelecom press service Timur Mamajonov reported.`,
  },
  {
    id: 4,
    text: `As part of the project, more than 3,000 existing base stations across Uzbekistan will be modernized using the latest technologies, and more than 2,000 new base stations will be built and put into operation.`,
  },
  {
    id: 5,
    text: `The process of upgrading base stations to the 5G standard is an important stage of the project. As a result, mobile subscribers will be able to comfortably use mobile Internet at the speed of the fifth generation.`,
  },
  {
    id: 6,
    text: `
    The first stage of the project provides for full coverage of the city of Tashkent with a 5G network, as well as partial coverage of regional centers. After completion of the work, the next stages of the implementation of 5G technology throughout the country will be.`,
  },
];
export function NewsPage() {
  return (
    <div
      className={classNames(style['news-page'])}
    >
      <div
        className={classNames(
          style['news-content'],
        )}
      >
        <h1>
          Uzbektelecom reduces prices for external
          Internet channel
        </h1>
        <img src={newsImg} alt="no foto" />
      </div>
      <div className={style['news-description']}>
        <div
          className={
            style['news-description-text']
          }
        >
          {textData.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))}
        </div>
        <img src={cardImg} alt="no foto" />
        <h5>Photo: REUTERS/Rafael Marchante</h5>
        <div
          className={
            style['news-description_text']
          }
        >
          <p>
            For lovers of art and culture, the
            park hosts exhibitions of modern
            sculptures and installations, as well
            as open-air concerts and theatrical
            performances. The amusement park has
            become not only a place for recreation
            and entertainment, but also a center
            of social activity for local
            residents. It hosts charity events,
            festivals and fairs that promote
            community development and create a
            pleasant atmosphere in the city.
          </p>
          <p>
            We invite you and your loved ones to
            visit this unique amusement park and
            plunge into a world of joy and fun.
            Don&rsquo;t miss the opportunity to
            spend an unforgettable time with us in
            our beautiful city!&rdquo; It hosts
            charity events, festivals and fairs
            that promote community development and
            create a pleasant atmosphere in the
            city. For lovers of art and culture,
            the park hosts exhibitions of modern
            sculptures and installations, as well
            as open-air concerts an
          </p>
        </div>
        <img src={secondImg} alt="no foto" />
        <h5>Photo: REUTERS/Rafael Marchante</h5>
        <div
          className={
            style['news-description_text']
          }
        >
          <p>
            For lovers of art and culture, the
            park hosts exhibitions of modern
            sculptures and installations, as well
            as open-air concerts and theatrical
            performances. The amusement park has
            become not only a place for recreation
            and entertainment, but also a center
            of social activity for local
            residents. It hosts charity events,
            festivals and fairs that promote
            community development and create a
            pleasant atmosphere in the city.
          </p>
          <p>
            We invite you and your loved ones to
            visit this unique amusement park and
            plunge into a world of joy and fun.
            Don&rsquo;t miss the opportunity to
            spend an unforgettable time with us in
            our beautiful city!&rdquo;
          </p>
        </div>
      </div>
      <div
        className={classNames(
          style['news-footer'],
        )}
      >
        <div
          className={classNames(
            style['footer-content'],
          )}
        >
          <div
            className={classNames(style.icons)}
          >
            <Facebook />
            <Telegram />
            <Vkontakte />
            <Twitter />
          </div>
          <p>
            Source:
            <a href="https://www.kun.uz">
              kun.uz
            </a>
          </p>
        </div>
        <div className={classNames(style.status)}>
          <p>#Karshi</p>
          <p>#Karshi</p>
          <p>14h ago </p>
          <p>1240</p>
        </div>
      </div>
      <h2>latest news</h2>
      <NewsSlider />
    </div>
  );
}
