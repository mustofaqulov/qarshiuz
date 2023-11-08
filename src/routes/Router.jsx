import { Route, Routes } from 'react-router-dom';
import { routePaths } from '../constants/routers';
import {
  HomePage,
  Category,
  EventsPage,
} from '../pages';
import PageNotfound from '../pages/error/404';

export function Router() {
  return (
    <Routes>
      <Route
        path={routePaths.HOME}
        element={<HomePage />}
      />
      <Route
        path={routePaths.CATEGORY}
        element={<Category />}
      />
      <Route
        path={routePaths.EVENTS}
        element={<EventsPage />}
      />
      <Route
        path={routePaths.NOT_FOUND}
        element={<PageNotfound />}
      />
    </Routes>
  );
}
