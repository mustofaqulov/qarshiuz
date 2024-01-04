import { Link } from 'react-router-dom';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import 'swiper/css';
import classNames from 'classnames';
import style from '../sliders.module.scss';
import { EventsCard } from '../../cards/EventsCard/EventsCard';
import { SliderButtons } from '../SliderButton/SliderButtons';
import { Button } from '../../Button/Button';
import ArrowUpIcon from '../../../assets/icons/arrow-up.svg';
import { eventsCardData } from '../../../utils/mock';

export function EventsSlider() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      breakpoints={{
        0: {
          slidesPerView: 1.3,
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
      {eventsCardData.map((cardInfo) => {
        return (
          <SwiperSlide key={cardInfo.id}>
            <Link to="/events">
              <EventsCard cardInfo={cardInfo} />
            </Link>
          </SwiperSlide>
        );
      })}
      <div className={classNames(style.buttons)}>
        <Link to="/events">
          <Button
            title="view all events"
            btnClass="secondary"
            icon={<ArrowUpIcon />}
          />
        </Link>
        <SliderButtons />
      </div>
    </Swiper>
  );
}
