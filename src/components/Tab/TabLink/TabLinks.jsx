import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import style from '../Tab.module.scss';

export function TabLinks({
  tabs,
  activeTab,
  onTabClick,
}) {
  const { i18n } = useTranslation();
  return (
    <div
      className={classNames(style['tab-links'])}
    >
      {tabs.map(({ id, title, lang }) => (
        <button
          key={id}
          className={classNames(
            style['tab-link'],
            id === activeTab ? style.active : '',
          )}
          onClick={() => {
            onTabClick(id);
            i18n.changeLanguage(lang);
          }}
        >
          {title}
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
