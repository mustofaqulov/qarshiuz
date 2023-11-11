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
    title: 'city news in one place',
    component: <NewsSlider />,
  },
  {
    id: 3,
    title: 'exciting events in the city',
    component: <EventsSlider />,
  },
];
