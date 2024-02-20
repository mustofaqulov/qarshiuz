import { Link } from 'react-router-dom';
import CornerLeft from '../../../assets/icons/corner-left.svg';
import style from './small-card.module.scss';

const cardsData = [
  {
    id: 1,
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
  {
    id: 2,
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
  {
    id: 3,
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
  {
    id: 4,
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
  {
    id: 5,
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
  {
    id: 6,
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
  {
    id: 7,
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
  {
    id: 8,
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
];
const subList = [
  { text: 'Chayxana', path: '/', id: 0 },
  { text: 'Chayxana', path: '/', id: 1 },
  { text: 'Chayxana', path: '/', id: 2 },
  { text: 'Chayxana', path: '/', id: 3 },
  { text: 'Chayxana', path: '/', id: 4 },
  { text: 'Chayxana', path: '/', id: 5 },
  { text: 'Chayxana', path: '/', id: 6 },
];
export function MiniCategory() {
  return (
    <div className={style['cards-wrapper']}>
      {cardsData.map(({ url, text, id }) => {
        return (
          <div
            key={id}
            className={style['cards-item']}
          >
            <div className={style['card-img']}>
              <img src={url} alt={text} />
            </div>
            <p>{text}</p>
          </div>
        );
      })}
      <div className={style.subcategory}>
        <p>
          <CornerLeft />
          <strong>See all advertisements </strong>
          <span>in Restaurants</span>
        </p>
        <ul>
          {subList.map(({ text, path, id }) => {
            return (
              <li key={id}>
                <CornerLeft />
                <Link to={path}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
