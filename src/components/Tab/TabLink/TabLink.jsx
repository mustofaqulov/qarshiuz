import PropTypes from 'prop-types';

export function TabLinks({
  tabs,
  activeTab,
  onTabClick,
}) {
  return (
    <div className="tab-links">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-link ${
            activeTab === tab.id ? 'active' : ''
          }`}
          onClick={() => onTabClick(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
}

TabLinks.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activeTab: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired,
};
