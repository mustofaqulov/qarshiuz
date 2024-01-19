import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import {
  Autoplay,
  Pagination,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import classNames from 'classnames';
import style from './promo-slider.module.scss';
import { promoSliderData } from '../../utils/mock';

export function PromoSlider() {
  return (
    <div
      className={classNames(style['promo-slide'])}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides
        loop
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        {promoSliderData.map(
          ({ sliderImg, id }) => {
            return (
              <SwiperSlide key={id}>
                <div
                  className={classNames(
                    style['slider-color'],
                  )}
                />
                <img src={sliderImg} alt="" />
              </SwiperSlide>
            );
          },
        )}
      </Swiper>
    </div>
  );
}
