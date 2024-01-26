import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { locales } from '../../constants/locales';
import style from './tab.module.scss';
import { useEffect, useRef, useState } from 'react';

export function LanguageTab() {
   const { i18n } = useTranslation();
   const [isOpen, setIsOpen] = useState(false)
   const CurrentLangIcon = locales[i18n.resolvedLanguage].icon

   const dropdownRef = useRef();

   const handleOtherClicks = ({ target }) => {
      if (!dropdownRef.current.contains(target)) {
         setIsOpen(false);
      }
   }
   useEffect(() => {
      if (isOpen) {
         window.addEventListener('click', handleOtherClicks)
      } else {
         window.removeEventListener('click', handleOtherClicks)
      }
   }, [isOpen])


   const langTabs = Object.keys(locales).map(
      (lang) => (
         <li
            className={classNames(style['tab-link'])}
            key={lang}
         >
            <button
               onClick={() => {
                  i18n.changeLanguage(lang);
                  window.removeEventListener('click', handleOtherClicks)
                  setIsOpen(false)
               }}
               className={classNames(lang === i18n.resolvedLanguage ? style.active : '')}
            >
               {locales[lang].icon()}
               {locales[lang].title}
            </button>
         </li>
      ),
   );
   const choicesClasses = isOpen ? style.active : ''

   return (
      <div
         className={classNames(style['tab-links'])}
         ref={dropdownRef}
      >
         <div
            onClick={() => setIsOpen(!isOpen)}
            className={classNames(style.lang)}
         >
            <CurrentLangIcon />
         </div >
         {
            isOpen && <ul
               className={choicesClasses}
            >
               {langTabs}
            </ul>
         }
      </div>
   );
}