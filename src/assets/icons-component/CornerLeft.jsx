import * as React from 'react';
const SvgCornerLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 9 16"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m1.458 1.4 5.434 5.433a1.655 1.655 0 0 1 0 2.334L1.458 14.6"
    />
  </svg>
);
export default SvgCornerLeft;
