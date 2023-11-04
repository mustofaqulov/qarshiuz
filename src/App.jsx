import { MiniCards } from './components';
import { Layout } from './layout/Layout';
import { HomePage } from './pages';

export default function App() {
  return (
    <Layout>
      <HomePage />
      {/* <MiniComponents /> */}
      <MiniCards />
    </Layout>
  );
}
