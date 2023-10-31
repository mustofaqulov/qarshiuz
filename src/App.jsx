import { Button } from './components/Button/Button';

export default function App() {
  return (
    <Button
      title="Add new"
      btnClass="primary"
      icon={
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1113_10103)">
            <path
              d="M-1.31372 10H21.3137M9.99999 21.3137V-1.31371"
              stroke="white"
              stroke-width="1.6"
            />
          </g>
          <defs>
            <clipPath id="clip0_1113_10103">
              <rect
                width="20"
                height="20"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      }
      type="button"
      onClick={() => {}}
    />
  );
}
