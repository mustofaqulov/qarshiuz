import classNames from 'classnames';
import { PromoSlider } from '../../components';
import Facebook from '../../assets/icons/facebook-black.svg';
import Telegram from '../../assets/icons/telegram-black.svg';
import Vkontakte from '../../assets/icons/vkontakte-black.svg';
import Twitter from '../../assets/icons/twitter-icon.svg';

import style from './about-page.module.scss';

export function AboutPage() {
  const aboutData = [
    {
      id: 1,
      data: `The capital of Qashqa Darya Province, this small city of 200,000 people is a regional hub due to the proximity of natural gas plants and the numerous cotton fields that surround it, all of which are irrigated with water diverted from the Amu Darya. But only few people know that the age of Karshi is over 2700 years. A lot of names of various rulers and heroes are related to the history of this town. The city has Sogdian roots, but it is the surviving medieval madrassas, mausoleums and mosques, not to mention a reputation for producing finely worked flat-weave carpets, that attract an occasional tourist.`,
    },
    {
      id: 2,
      data: `Strategically situated on the main 11-day trade route from Balkh to Bukhara, Karshi has transcended previous incarnations as the Sogdian city of Nakhshab, the Arab city of Nasaf and and lastly Karshi, which took its name from the two 14th-century palaces built by the Mongol khans. According to UNESCO researches, as far back as in the 7th century BC some settlement existed on the site of current town. Locating on the Great Silk Road, which went from Central Asia to India and Afghanistan, Karshi was important spot for many invaders. In the 4th century BC Alexander the Great tried to conquer this town and was delighted with the strength of local people. Freedom-loving people always tried to uphold their liberty and independence.`,
    },
    {
      id: 3,
      data: `
      Karshi ('palace' in Mongolian) gets its modern name from the twin palaces built here in the 1320s by the Chagatai Khans Kebek and Kazanby on the site of Genghis Khan's old summer pastures. Until the 14th century the town was called as Hakshab (in some sources Nasaf), but in 1364 Tamerlane ordered to built the fortified palace and moat in what is now the southern part of Karshi, and later the town obtained the name of Karshi (Karshi in Turkic language means “fortification”). It was into this citadel that most of the town later fled, under siege from the successive campaigns of Shaybani and Abdullah Khan. Successive rulers extended the city walls and constructed caravanserais, gardens and religious buildings.
      Beginning from the 14th century Karshi was gradually growing: the violent growth of the town was during the Dynasty of Sheybanids (16th cent.). In the 18th century it became the second important city in the Bukhara Khanate. Major part of outstanding architectural monuments of the city was built during these centuries.`,
    },
    {
      id: 4,
      data: `The 18th century saw the city's importance grow as Shakhrisabsz declined and before long Karshi was to become the second city of the Bukharan emirate and the begship of the emir's heir designate. By this time the double set of city walls had expanded to encompass four madrassahs, ten caravanserais, public baths, gardens, a prison and even a secret tunnel which, in times of nomadic incursions or domestic revolt, would provide the palace of the beg with an escape route to the outside world. The city even had the occasional pane of glass-the truest indicator of ostentatious wealth.`,
    },
    {
      id: 5,
      data: `n 1868 the Russians annexed the fertile Zerafshan Valley, turning the Kashgar Darya valley around Karshi into the main granary for the entire emirate and, in 1873, the main document that relegated Bukhara to a dependency of Russia was signed in the city, much to the gall of the emir's son, Abdul Malik, who led a brief rebellion here before fleeing to Peshawar.
      After a long hiatus, Karshi emerged briefly to international attention following the US invasion of Afghanistan as the site of the Khanabad airbase. Though this was initially used to supply US troops, it was forced to close in 2005 following US criticism of the Andijan events and replaced with the Manas airbase outside Bishkek in Kyrgyzstan.`,
    },
  ];
  return (
    <div
      className={classNames(
        'container',
        style['about-page'],
      )}
    >
      <h1 className={classNames(style.title)}>
        About the city of Karshi
      </h1>
      <PromoSlider />
      <div className={classNames(style.about)}>
        {aboutData.map((item) => (
          <p
            key={item.id}
            className={classNames(
              style['text-container'],
              style.text,
            )}
          >
            {item.data}
          </p>
        ))}
      </div>
      <div
        className={classNames(
          style['text-container'],
          style['about-footer'],
        )}
      >
        <div className={classNames(style.icons)}>
          <Facebook />
          <Telegram />
          <Vkontakte />
          <Twitter />
        </div>
        <p className={classNames(style.source)}>
          Source:{' '}
          <a href="https://uzbekistan.travel/ru/">
            uzbek-travel.com
          </a>
        </p>
      </div>
    </div>
  );
}
