import * as React from 'react';
const SvgSideArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 34 34"
    {...props}
  >
    <path
      stroke="#A9A9A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14.426 10.99h8.584v8.584M10.99 23.01l11.9-11.9"
    />
  </svg>
);
export default SvgSideArrow;
