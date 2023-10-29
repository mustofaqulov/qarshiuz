import * as React from 'react';
const SvgStar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#star_svg__a)">
      <path
        fill="#E64B13"
        d="M5.418 23.164c-.579.297-1.236-.223-1.119-.888l1.245-7.095-5.285-5.034c-.493-.47-.237-1.332.425-1.425l7.347-1.044 3.276-6.49a.77.77 0 0 1 1.39 0l3.277 6.49 7.346 1.044c.662.093.918.954.424 1.425l-5.284 5.034 1.245 7.095c.118.665-.54 1.185-1.118.888L12 19.78l-6.582 3.384Z"
      />
    </g>
    <defs>
      <clipPath id="star_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStar;
