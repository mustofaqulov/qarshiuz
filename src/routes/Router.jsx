import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { routePaths } from '../constants/routers';
import { Category, HomePage } from '../pages';
import App from '../App';

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
      </Route>
    </Routes>
  );
}
