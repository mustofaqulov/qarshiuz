import PropTypes from 'prop-types';

export const Button = ({ type }) => {
  return <button type={type}>Click me!</button>;
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
};
