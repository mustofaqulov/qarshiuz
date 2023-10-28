// import { Suspense } from 'react';
// import { useTranslation } from 'react-i18next';
// import { locales } from './constants/locales';
import { Tab } from './components/Tab/Tab';

export default function App() {
  // const { t, i18n } = useTranslation();

  // const languageButtons = Object.keys(
  //   locales,
  // ).map((lang) => (
  //   <button
  //     key={lang}
  //     style={{
  //       margin: '5px',
  //       backgroundColor:
  //         lang === i18n.resolvedLanguage
  //           ? 'green'
  //           : 'red',
  //     }}
  //     onClick={() => i18n.changeLanguage(lang)}
  //   >
  //     {locales[lang].title}
  //   </button>
  // ));

  return <Tab />;
}
