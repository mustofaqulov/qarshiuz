import classNames from 'classnames';
import style from './skeleton.module.scss';

export function Skeleton() {
  return (
    <div
      className={classNames(style['card-info'])}
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