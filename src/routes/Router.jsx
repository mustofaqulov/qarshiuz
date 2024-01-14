import { Route, Routes } from 'react-router-dom';
import { routePaths } from '../constants/routers';
import {
  HomePage,
  EventsPage,
  NotFoundPage,
  CategoryPage,
  CategoryCardPage,
  NewsPage,
} from '../pages';

export function Router() {
  const {
    HOME,
    CATEGORY,
    EVENTS,
    NEWS,
    CATEGORYCARD,
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
        path={CATEGORYCARD}
        element={<CategoryCardPage />}
      />
      <Route
        path={NOT_FOUND}
        element={<NotFoundPage />}
      />
    </Routes>
  );
}
