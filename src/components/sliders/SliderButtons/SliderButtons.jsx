import { useSwiper } from 'swiper/react';
import classNames from 'classnames';
import style from './slider-buttons.module.scss';
import { Button } from '../../Button/Button';
import CaruselRightIcon from '../../../assets/icons/carusel-right-icon.svg?react';
import CaruselLeftIcon from '../../../assets/icons/carusel-left-icon.svg?react';
import ArrowUpIcon from '../../../assets/icons/arrow-up.svg?react';

export function SliderButtons() {
  const swiperBtn = useSwiper();
  return (
    <div className={classNames(style.buttons)}>
      <Button
        title="view all news"
        btnClass="secondary"
        icon={<ArrowUpIcon />}
      />
      <div
        className={classNames(
          style['slider-btn'],
        )}
      >
        <Button
          type="button"
          btnClass="circle-btn"
          icon={<CaruselLeftIcon />}
          onClick={() => swiperBtn.slidePrev()}
        />
        <Button
          type="button"
          btnClass="circle-btn"
          icon={<CaruselRightIcon />}
          onClick={() => swiperBtn.slideNext()}
        />
      </div>
    </div>
  );
}
