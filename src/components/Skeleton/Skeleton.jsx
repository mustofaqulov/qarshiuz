import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './skeleton.module.scss';

export function Skeleton({ key }) {
  return (
    <div
      className={classNames(style['card-info'])}
      key={key}
    >
      <div
        className={classNames(
          style['img-skeleton'],
          style.loading,
        )}
      />
      <div
        className={classNames(
          style['card-about'],
        )}
      >
        <div
          className={classNames(
            style['title-skeleton'],
            style.loading,
          )}
        />
        <div
          className={classNames(
            style['description-skeleton'],
            style.loading,
          )}
        />
      </div>
    </div>
  );
}

Skeleton.defaultProps = {
  key: null,
};
Skeleton.propTypes = {
  key: PropTypes.node,
};
