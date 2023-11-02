import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import 'swiper/css';
import classNames from 'classnames';
import { SliderButtons } from '../SliderButtons/SliderButtons';
import NewsCard from '../../cards/NewsCard/NewsCard';
import style from '../sliders.module.scss';

export default function NewsSlider() {
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
