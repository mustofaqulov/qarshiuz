import { TabComponent } from './TabItems/TabItems';
import style from './Tab.module.scss';
import { tabs } from '../../utils/mock/tab';

export function Tab() {
  return (
    <div className={style.tabs}>
      <TabComponent
        tabs={tabs}
        defaultActiveTab={1}
        onTabClick={() => {}}
      />
    </div>
  );
}
