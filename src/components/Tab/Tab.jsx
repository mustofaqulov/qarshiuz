import { TabComponent } from './TabItems/TabItems';
import './Tab.scss';

export function Tab() {
  const tabs = [
    {
      id: 1,
      title: 'eng',
    },
    {
      id: 2,
      title: 'rus',
    },
    {
      id: 3,
      title: 'uzb',
    },
  ];

  return (
    <div className="tabs">
      <TabComponent
        tabs={tabs}
        defaultActiveTab={1}
      />
    </div>
  );
}
