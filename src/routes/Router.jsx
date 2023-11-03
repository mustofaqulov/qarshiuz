import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { routePaths } from '../constants/routers';
import { HomePage } from '../pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routePaths.HOME}
          element={<HomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
