import classNames from 'classnames';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import 'swiper/css';
import style from '../sliders.module.scss';
import { NewsCard } from '../../Cards/NewsCard/NewsCard';
import { newsCardData } from '../../../utils';
import { SliderButtons } from '../SliderButton/SliderButtons';
import { Button } from '../../Button/Button';
import ArrowUpIcon from '../../../assets/icons/arrow-up.svg';

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
      {newsCardData.map(
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
                cardImg={newsImg}
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
