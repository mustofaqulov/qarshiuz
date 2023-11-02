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

export default function RecommendationSlider() {
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
        {/* <div
          className={classNames(
            style['category-card'],
          )}
        >
          <div
            className={classNames(
              style['category-status'],
            )}
          >
            <div
              className={classNames(
                style['status-name'],
              )}
            >
              <span>top</span>
            </div>
            <img src="" alt="" />
          </div>
          <div
            className={classNames(
              style['category-info'],
            )}
          >
            <h5>Aroma</h5>
            <div
              className={classNames(
                style['category-location'],
              )}
            >
              <div
                className={classNames(
                  style['location-info'],
                )}
              >
                <LocationIcon />
                <span>
                  Uzbekistan street, Karshi
                  180100, Uzbekistan
                </span>
              </div>
              <SideArrowIcon />
            </div>
          </div>
        </div> */}
      </SwiperSlide>
      <SliderButtons />
    </Swiper>
  );
}
