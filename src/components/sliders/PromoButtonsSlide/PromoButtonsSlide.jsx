import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import { smallBtnData } from '../../../utils/mock';
import { Button } from '../../Button/Button';

export function PromoButtonsSlide() {
  return (
    <Swiper
      modules={[Scrollbar]}
      slidesPerView={3}
      spaceBetween={30}
      speed={1000}
      scrollbar
    >
      {smallBtnData.map(({ id, title }) => {
        return (
          <SwiperSlide key={id}>
            <Button btnClass="sm" title={title} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
