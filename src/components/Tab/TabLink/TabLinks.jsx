import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import style from '../tab.module.scss';
import { locales } from '../../../constants/locales';

export function TabLinks() {
  const { i18n } = useTranslation();

  const langBtns = Object.keys(locales).map(
    (lang) => (
      <button
        key={lang}
        className={classNames(style['tab-link'], {
          [style.active]:
            lang === i18n.resolvedLanguage,
        })}
        onClick={() => {
          i18n.changeLanguage(lang);
        }}
      >
        {locales[lang].title}
      </button>
    ),
  );

  return (
    <div
      className={classNames(style['tab-links'])}
    >
      {langBtns}
    </div>
  );
}
