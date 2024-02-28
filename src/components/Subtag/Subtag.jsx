import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './sub-tag.module.scss';

export function SubTag({
  tagClass,
  title,
  icon,
}) {
  const tagClassName = classNames({
    [style['sub-tag']]: tagClass === 'sub-tag',
    [style['close-tag']]:
      tagClass === 'close-tag',
    [style['status-name']]:
      tagClass === 'status-name',
  });
  return (
    <div className={tagClassName}>
      {icon}
      {title}
    </div>
  );
}

SubTag.defaultProps = {
  tagClass: '',
  title: '',
  icon: null,
};

SubTag.propTypes = {
  tagClass: PropTypes.oneOf([
    'sub-tag',
    'close-tag',
    'status-name',
  ]),
  title: PropTypes.string,
  icon: PropTypes.node,
};
