import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { routePaths } from '../constants/routers';
import { EventsPage, HomePage } from '../pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routePaths.HOME}
          element={<HomePage />}
        />
        <Route
          path={routePaths.Events}
          element={<EventsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
