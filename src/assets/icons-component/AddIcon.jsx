import * as React from 'react';
const SvgAddIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#add-icon_svg__a)">
      <path
        stroke="#000"
        strokeWidth={1.6}
        d="M-1.314 10h22.628M10 21.314V-1.314"
      />
    </g>
    <defs>
      <clipPath id="add-icon_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAddIcon;
