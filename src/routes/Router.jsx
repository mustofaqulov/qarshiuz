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
  return (
    <Routes>
      <Route
        path={routePaths.HOME}
        element={<HomePage />}
      />
      <Route
        path={routePaths.CATEGORY}
        element={<CategoryPage />}
      />
      <Route
        path={routePaths.EVENTS}
        element={<EventsPage />}
      />
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
