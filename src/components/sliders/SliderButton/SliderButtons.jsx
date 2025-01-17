import { useSwiper } from 'swiper/react';
import classNames from 'classnames';
import style from '../sliders.module.scss';
import { Button } from '../../Button/Button';
import CarouselRightIcon from '../../../assets/icons/carousel-right-icon.svg';
import CarouselLeftIcon from '../../../assets/icons/carousel-left-icon.svg';

export function SliderButtons() {
  const swiperBtn = useSwiper();
  return (
    <div
      className={classNames(style['slider-btn'])}
    >
      <Button
        type="button"
        btnClass="circle-btn"
        icon={<CarouselLeftIcon />}
        onClick={() => swiperBtn.slidePrev()}
      />
      <Button
        type="button"
        btnClass="circle-btn"
        icon={<CarouselRightIcon />}
        onClick={() => swiperBtn.slideNext()}
      />
    </div>
  );
}
