import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import classNames from 'classnames';
import style from '../sliders.module.scss';
import { SliderButtons } from '../SliderButtons/SliderButtons';
import { CategoryCard } from '../../cards/CategoryCard/CategoryCard';

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
