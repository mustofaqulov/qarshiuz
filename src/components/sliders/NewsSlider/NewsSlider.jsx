import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import 'swiper/css';
import style from '../sliders.module.scss';
import { NewsCard } from '../../Cards/NewsCard/NewsCard';
import { SliderButtons } from '../SliderButton/SliderButtons';
import { Button } from '../../Button/Button';
import ArrowUpIcon from '../../../assets/icons/arrow-up.svg';
import { newsCardData } from '../../../utils/mock';

export function NewsSlider() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      breakpoints={{
        0: {
          slidesPerView: 1.3,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      speed={1000}
      className={classNames(style.sliders)}
    >
      {newsCardData.map((cardInfo) => {
        return (
          <SwiperSlide key={cardInfo.id}>
            <Link to="/news">
              <NewsCard cardInfo={cardInfo} />
            </Link>
          </SwiperSlide>
        );
      })}
      <div className={classNames(style.buttons)}>
        <Link to="/news">
          <Button
            title="view all news"
            btnClass="secondary"
            icon={<ArrowUpIcon />}
          />
        </Link>
        <SliderButtons />
      </div>
    </Swiper>
  );
}
