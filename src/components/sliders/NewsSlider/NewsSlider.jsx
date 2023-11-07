import classNames from 'classnames';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import 'swiper/css';
import style from '../sliders.module.scss';
import { SliderButtons } from '../SliderButton/SliderButtons';
import { NewsCard } from '../../Cards/NewsCard/NewsCard';
import { Button } from '../../Button/Button';
import ArrowUpIcon from '../../../assets/icons/arrow-up.svg';
import { newsSliderData } from '../../../utils';

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
      {newsSliderData.map(
        ({
          id,
          status,
          title,
          description,
          newsImg,
        }) => {
          return (
            <SwiperSlide key={id}>
              <NewsCard
                status={status}
                title={title}
                description={description}
                slideImg={newsImg}
              />
            </SwiperSlide>
          );
        },
      )}
      <div className={classNames(style.buttons)}>
        <Button
          title="view all news"
          btnClass="secondary"
          icon={<ArrowUpIcon />}
        />
        <SliderButtons />
      </div>
    </Swiper>
  );
}
