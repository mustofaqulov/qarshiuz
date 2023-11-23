import classNames from 'classnames';
import style from './category-card-page.module.scss';
import {
  Button,
  RecommendationSlider,
} from '../../components';

import LocationIcon from '../../assets/icons/location-border.svg';
import BriefcaseIcon from '../../assets/icons/briefcase.svg';
import GlobalIcon from '../../assets/icons/global.svg';
import CallCallingIcon from '../../assets/icons/call-calling.svg';
import StarIcon from '../../assets/icons/star.svg';
import ArrowUpIcon from '../../assets/icons/arrow-up.svg';
import FaceBookBlackIcon from '../../assets/icons/facebook-black.svg';
import TelegramBlackIcon from '../../assets/icons/telegram-black.svg';
import VkontakteBlackIcon from '../../assets/icons/vkontakte-black.svg';
import CategoryCardMap from '../../assets/img/category-card-map.png';

const establishmentData = [
  {
    id: 1,
    title: 'Kitchen',
    description:
      "Russian cuisine, Caucasian cuisine, European cuisine, author's cuisine",
  },
  {
    id: 2,
    title: 'Banquet halls by capacity',
    description:
      'Banquet hall for 20 people, banquet hall for 30 people, banquet hall for 15 people, banquet hall for 100 people, banquet hall for 50 people, banquet hall for 10 people, banquet hall for 40 people, banquet hall for 25 people, banquet hall for 200 people, banquet hall for 60 people, banquet hall for 150 people, banquet hall for 70 people, banquet hall for 80 people, banquet hall for 250 people',
  },
  {
    id: 3,
    title: 'Additional features',
    description:
      'Karaoke, live music, dance floor, board games, parking, Wi-Fi',
  },
  {
    id: 4,
    title: 'Restaurant',
    description: 'Family restaurant',
  },
];

export function CategoryCardPage() {
  return (
    <div
      className={classNames(
        style['category-about'],
      )}
    >
      <div
        className={classNames(style['card-info'])}
      >
        <h1>morning cafe</h1>
        <div
          className={classNames(
            style['card-status'],
          )}
        >
          <div
            className={classNames(
              style['img-color'],
            )}
          >
            <div
              className={classNames(style.color)}
            />
            <img
              src="https://www.uzbek-travel.com/images/uz/Cities/Karshi/karshi9.jpg"
              alt=""
            />
          </div>
          <div className={classNames(style.info)}>
            <h5>details</h5>
            <div
              className={classNames(
                style['info-status'],
              )}
            >
              <ul>
                <li>
                  <LocationIcon />
                  <p>
                    Stadion Nasaf, Uzbekistan
                    street, Karshi
                  </p>
                </li>
                <li>
                  <BriefcaseIcon />
                  <p>Mon-Sat, 08:00- 20:00 </p>
                </li>
                <li>
                  <GlobalIcon />
                  <a
                    href="https://owa.uz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    mcafe.uz
                  </a>
                </li>
                <li>
                  <CallCallingIcon />
                  <p>+998 99 999 99 99</p>
                </li>
              </ul>
              <div
                className={classNames(
                  style.rating,
                )}
              >
                <div
                  className={classNames(
                    style['rating-status'],
                  )}
                >
                  <h6>rating</h6>
                  <div
                    className={classNames(
                      style.status,
                    )}
                  >
                    <strong>5</strong>
                    <div
                      className={classNames(
                        style.stars,
                      )}
                    >
                      {[1, 2, 3, 4, 5].map(
                        (item) => (
                          <StarIcon key={item} />
                        ),
                      )}
                    </div>
                  </div>
                </div>
                <Button
                  btnClass="primary"
                  title="140 review"
                />
              </div>
            </div>
            <Button
              btnClass="secondary"
              title="view map"
              icon={<ArrowUpIcon />}
            />
          </div>
        </div>
      </div>
      <div
        className={classNames(
          style['card-about'],
        )}
      >
        <div
          className={classNames(
            style['card-description'],
          )}
        >
          <h3>About the cafe</h3>
          <p>
            Your cafe is a place where flavors and
            aromas meet, where warmth and comfort
            abound. It’s a place where every guest
            can savor exquisite dishes, prepared
            with love and skill by our chefs. The
            cafe’s interior is designed in a
            modern style, creating an atmosphere
            of comfort and relaxation. Here, you
            can hold a business meeting, celebrate
            a birthday, or simply spend time with
            friends over a cup of coffee. We value
            each of our guests and do everything
            possible to make your visit
            unforgettable.
          </p>
          <p>
            In our cafe, we offer a diverse menu
            that includes local and international
            cuisine. Our chef carefully selects
            only the freshest and highest quality
            ingredients for our dishes. We also
            offer a wide range of beverages,
            including aromatic coffee, tea,
            freshly squeezed juices, and wine.
          </p>
          <p>
            Additionally, we provide free Wi-Fi,
            so you can work or simply relax while
            browsing the internet. Our friendly
            staff is always ready to assist you
            and answer any questions you may have.
            We look forward to welcoming you to
            our cafe! In our cafe, we offer a
            diverse menu that includes local and
            international cuisine. Our chef
            carefully selects only the freshest
            and highest quality ingredients for
            our dishes. We also offer a wide range
            of beverages, including aromatic
            coffee, tea, freshly squeezed juices,
            and wine.
          </p>
        </div>
        <div
          className={classNames(
            style['card-address'],
          )}
        >
          <h3>Address</h3>
          <div className={classNames(style.map)}>
            <img src={CategoryCardMap} alt="" />
          </div>
        </div>
        <div
          className={classNames(
            style['card-establishment'],
          )}
        >
          <h3>Features of the establishment</h3>

          {establishmentData.map((data) => {
            const { id, title, description } =
              data;
            return (
              <div
                key={id}
                className={classNames(
                  style['establishment-about'],
                )}
              >
                <h6>{title}</h6>
                <p>{description}</p>
              </div>
            );
          })}

          <div
            className={classNames(
              style['social-network'],
            )}
          >
            <h6>Social network</h6>
            <div
              className={classNames(
                style.networks,
              )}
            >
              <FaceBookBlackIcon />
              <TelegramBlackIcon />
              <VkontakteBlackIcon />
            </div>
          </div>
          <div
            className={classNames(style.hashtags)}
          >
            <span>#karshi</span>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          style['other-cards'],
        )}
      >
        <h2>Photography Cafe</h2>
        <RecommendationSlider />
      </div>
    </div>
  );
}
