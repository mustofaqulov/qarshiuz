import classNames from 'classnames';
import { Autoplay } from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import { CategoryCard } from '../../Cards/CategoryCard/CategoryCard';
import { SliderButtons } from '../SliderButton/SliderButtons';
import style from '../sliders.module.scss';
import 'swiper/css';

export function RecommendationSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
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
      loop
      speed={1000}
      className={classNames(style.sliders)}
    >
      <SwiperSlide>
        <CategoryCard />
      </SwiperSlide>
      <SliderButtons />
    </Swiper>
  );
}
