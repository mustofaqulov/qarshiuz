import { MiniCards } from './components';
import { Layout } from './layout/Layout';
import { HomePage } from './pages';
// import MiniCards from './components/MiniCards/MiniCards';
// import { MiniCards } from './components';
// import { MiniComponents } from './components';

export default function App() {
  return (
    <Layout>
      <HomePage />
      {/* <MiniComponents /> */}
      <MiniCards />
    </Layout>
  );
}
