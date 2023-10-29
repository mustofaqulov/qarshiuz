import classNames from 'classnames';
import style from '../tab.module.scss';
import { TabLinks } from '../TabLink/TabLinks';

export function TabItems() {
  return (
    <div className={classNames([style.tab])}>
      <TabLinks />
    </div>
  );
}
