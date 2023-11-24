import { Route, Routes } from 'react-router-dom';
import { routePaths } from '../constants/routers';
import {
  HomePage,
  EventsPage,
  NotFoundPage,
  CategoryPage,
  NewsPage,
} from '../pages';

export function Router() {
  const {
    HOME,
    CATEGORY,
    EVENTS,
    NEWS,
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
        path={routePaths.NEWS}
        element={<NewsPage />}
      />
      <Route
        path={routePaths.NOT_FOUND}
        element={<NotFoundPage />}
      />
    </Routes>
  );
}
