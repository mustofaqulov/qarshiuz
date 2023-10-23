import PropTypes from 'prop-types';

export function Button({ type }) {
  return <button type={type}>Click me!</button>;
}

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
};
