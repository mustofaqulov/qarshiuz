import Input from './components/Input/Input';
import { Navbar } from './components/Navbar/Navbar';
import MiniComponents from './components/MiniCards/MiniComponents/MiniComponents';
import CategoryItem from './components/MiniCards/CategoryItem/ItemInfo/ItemInfo';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Input />
      <MiniComponents />
      <CategoryItem />
      <Footer />
    </>
  );
}
