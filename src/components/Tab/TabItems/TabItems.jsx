import { useState } from 'react';
import PropTypes from 'prop-types';
import { TabLinks } from '../TabLink/TabLink';

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
    <div className="tab-component">
      <TabLinks
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${
              activeTab === tab.id ? 'active' : ''
            }`}
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
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    }),
  ).isRequired,
  defaultActiveTab: PropTypes.number.isRequired,
};
