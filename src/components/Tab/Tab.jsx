import classNames from 'classnames';
import { TabItems } from './TabItems/TabItems';
import style from './tab.module.scss';

export function Tab() {
  return (
    <div className={classNames[style.tabs]}>
      <TabItems />
    </div>
  );
}
