import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { locales } from './constants/locales';

export default function App() {
  const { t, i18n } = useTranslation();

  const languageButtons = Object.keys(
    locales,
  ).map((lang) => (
    <button
      key={lang}
      style={{
        margin: '5px',
        backgroundColor:
          lang === i18n.resolvedLanguage
            ? 'green'
            : 'red',
      }}
      onClick={() => i18n.changeLanguage(lang)}
    >
      {locales[lang].title}
    </button>
  ));

  return (
    <Suspense fallback="Loading...">
      <div style={{ marginBottom: '30px' }}>
        {languageButtons}
      </div>
      <h1>{t('text')}</h1>
    </Suspense>
  );
}
