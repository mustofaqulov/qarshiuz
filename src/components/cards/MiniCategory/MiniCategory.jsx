import { Link } from 'react-router-dom';
import { useId } from 'react';
import CornerLeft from '../../../assets/icons/corner-left.svg';
import style from './small-card.module.scss';

const cardsData = [
  {
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
  {
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
  {
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
  {
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
  {
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
  {
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
  {
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
  {
    url: 'https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?w=740&t=st=1699409221~exp=1699409821~hmac=76e264ce58a42b99c06e557ca8a431a7706958a02bd297318e7f467adb34e705 ',
    text: 'Restaurant',
  },
];
const subList = [
  { text: 'Chayxana', path: '/' },
  { text: 'Chayxana', path: '/' },
  { text: 'Chayxana', path: '/' },
  { text: 'Chayxana', path: '/' },
  { text: 'Chayxana', path: '/' },
  { text: 'Chayxana', path: '/' },
  { text: 'Chayxana', path: '/' },
];
export function MiniCategory() {
  const id = useId();
  return (
    <div className={style['cards-wrapper']}>
      {cardsData.map(({ url, text }) => {
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
          {subList.map(({ text, path }) => {
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