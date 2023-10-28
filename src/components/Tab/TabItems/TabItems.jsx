import { useState } from 'react';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import { TabLinks } from '../TabLink/TabLinks';
import style from '../Tab.module.scss';

export function TabComponent({
  tabs,
  defaultActiveTab,
}) {
  const [activeTab, setActiveTab] = useState(
    defaultActiveTab,
  );

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className={classNames(style.tab)}>
      <TabLinks
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
      <div
        className={classNames(
          style['tab-content'],
        )}
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={classNames(
              style['tab-link'],
              tab.id === activeTab
                ? style.active
                : '',
            )}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

TabComponent.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      lang: PropTypes.string,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    }),
  ).isRequired,
  defaultActiveTab: PropTypes.number.isRequired,
};
