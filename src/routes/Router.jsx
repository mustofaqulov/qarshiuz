import {
  // BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import App from '../App';
import App from '../App';
import { routePaths } from '../constants/routers';
import {
  HomePage,
  Category,
  EventsPage,
} from '../pages';
import Notfound from '../errors/404';

export function Router() {
  return (
    <Routes>
      <Route
        path={routePaths.HOME}
        element={<App />}
      >
        <Route index element={<HomePage />} />
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
          element={<Notfound />}
        />
      </Route>
    </Routes>
  );
}
