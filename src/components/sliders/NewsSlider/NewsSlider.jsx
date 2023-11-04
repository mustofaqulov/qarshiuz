import classNames from 'classnames';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import { SliderButtons } from '../SliderButton/SliderButtons';
import { NewsCard } from '../../Cards/NewsCard/NewsCard';
import style from '../sliders.module.scss';
import 'swiper/css';

export function NewsSlider() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      breakpoints={{
        0: {
          slidesPerView: 1,
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
      <SwiperSlide>
        <NewsCard />
      </SwiperSlide>
      <SliderButtons />
    </Swiper>
  );
}
