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
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        style={{
          '--swiper-pagination-color': '#FFF',
          '--swiper-pagination-bullet-inactive-color':
            '#FFF',
          '--swiper-pagination-bullet-inactive-opacity':
            '0.7',
          '--swiper-pagination-bullet-size':
            '8px',
          '--swiper-pagination-bottom': '1.25rem',
        }}
      >
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
