import classNames from 'classnames';
import style from './category.module.scss';

export function Category() {
  return (
    <div className={classNames(style.category)}>
      <div
        className={classNames(
          style['category-info'],
        )}
      >
        <h1>hello</h1>
      </div>
    </div>
  );
}
