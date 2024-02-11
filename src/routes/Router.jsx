import { Route, Routes } from 'react-router-dom';
import { routePaths } from '../constants/routers';
import {
  HomePage,
  EventsPage,
  NotFoundPage,
  CategoryPage,
  CategoryCardPage,
  NewsPage,
  AboutPage,
} from '../pages';

export function Router() {
  const {
    HOME,
    CATEGORY,
    EVENTS,
    NEWS,
    ABOUT,
    CATEGORY_CARD,
    NOT_FOUND,
  } = routePaths;
  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route
        path={CATEGORY}
        element={<CategoryPage />}
      />
      <Route
        path={EVENTS}
        element={<EventsPage />}
      />
      <Route path={NEWS} element={<NewsPage />} />
      <Route
        path={CATEGORY_CARD}
        element={<CategoryCardPage />}
      />
      <Route
        path={ABOUT}
        element={<AboutPage />}
      />
      <Route
        path={NOT_FOUND}
        element={<NotFoundPage />}
      />
    </Routes>
  );
}
