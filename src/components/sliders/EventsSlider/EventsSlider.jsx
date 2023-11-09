import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import 'swiper/css';
import classNames from 'classnames';
import { SliderButtons } from '../SliderButton/SliderButtons';
import style from '../sliders.module.scss';
import { EventsCard } from '../../Cards/EventsCard/EventsCard';

export function EventsSlider() {
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
        <EventsCard />
      </SwiperSlide>
      <SliderButtons />
    </Swiper>
  );
}
