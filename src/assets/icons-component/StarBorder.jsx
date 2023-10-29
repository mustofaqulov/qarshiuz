import * as React from 'react';
const SvgStarBorder = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#star-border_svg__a)">
      <path
        stroke="#E64B13"
        strokeWidth={1.2}
        d="M4.89 22.38a.232.232 0 0 0 .08.23c.056.045.114.051.174.02l-.254-.25Zm0 0 1.245-7.095.056-.316M4.89 22.38l1.3-7.411m0 0-.232-.222m.232.222-.232-.222m0 0L.674 9.713a.24.24 0 0 1-.06-.249c.028-.094.088-.138.154-.148m5.19 5.43-5.19-5.43m0 0 7.347-1.044.31-.044.142-.28 3.275-6.49M.768 9.316l11.074-7.858m0 0Zm-.116 17.789L5.144 22.63H18.86l-6.586-3.383-.274-.141-.274.14Zm.436-17.789 3.276 6.49.141.28.31.044 7.347 1.044h.001c.065.01.126.054.154.148a.239.239 0 0 1-.061.249l-5.283 5.034-.233.222.055.316 1.245 7.095a.232.232 0 0 1-.08.23c-.056.045-.114.051-.173.02l-6.7-21.172Z"
      />
    </g>
    <defs>
      <clipPath id="star-border_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStarBorder;
