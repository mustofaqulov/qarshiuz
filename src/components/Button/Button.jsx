import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './button.module.scss';

export function Button({
  type,
  btnClass,
  icon,
  title,
  onClick,
  still,
}) {
  const buttonClasses = classNames(style.btn, {
    [style.primary]: btnClass === 'primary',
    [style.secondary]: btnClass === 'secondary',
    [style.sm]: btnClass === 'sm',
    [style['circle-btn']]:
      btnClass === 'circle-btn',
    [style.close]: btnClass === 'close',
  });

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      style={still}
    >
      {title} {icon}
    </button>
  );
}
Button.defaultProps = {
  btnClass: '',
  icon: null,
  type: 'button',
  title: null,
  onClick: () => {},
  still: {},
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  btnClass: PropTypes.oneOf([
    'primary',
    'secondary',
    'circle-btn',
    'sm',
    'close',
  ]),
  icon: PropTypes.node,
  title: PropTypes.string,
  onClick: PropTypes.func,
  still: PropTypes.object,
};
