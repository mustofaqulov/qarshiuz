import { EventsSlider } from './EventsSlider/EventsSlider';
import { NewsSlider } from './NewsSlider/NewsSlider';
import { RecommendationSlider } from './RecommendationSlider/RecSlider';

export const sliderData = [
  {
    id: 1,
    title: 'Our recommendations',
    component: <RecommendationSlider />,
  },
  {
    id: 2,
    title: 'Our recommendations',
    component: <NewsSlider />,
  },
  {
    id: 3,
    title: 'Our recommendations',
    component: <EventsSlider />,
  },
];
