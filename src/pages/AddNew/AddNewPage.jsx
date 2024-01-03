import classNames from 'classnames';
import style from './add-new-page.module.scss';
import PhoneInput from 'react-phone-number-input';
import Telegram from '../../assets/icons/telegram-black.svg';
import Facebook from '../../assets/icons/facebook-black.svg';
import Vkontakte from '../../assets/icons/vkontakte-black.svg';

export function AddNewPage() {
  return (
    <div
      className={classNames(
        style.container,
        style['add-new-page'],
      )}
    >
      <div
        className={classNames(
          style['add-section'],
        )}
      >
        <div
          className={classNames(
            style['add-title'],
          )}
        >
          <h1>LET&rsquo;S START WORK TOGETHER</h1>
          <p>
            Discover the diversity of our city,
            where history, culture, nature and
            entertainment and
          </p>
        </div>
        <div
          className={classNames(
            style['contact-us'],
          )}
        >
          <h4>Contacts</h4>
          <p>t. +998 99 999 99 91</p>
          <p>m. infoqarshi@gmail.com</p>
          <div
            className={classNames(style.socials)}
          >
            <h5>Social</h5>
            <div
              className={classNames(
                style['social-icons'],
              )}
            >
              <Telegram />
              <Facebook />
              <Vkontakte />
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          style['input-container'],
        )}
      >
        <div
          className={classNames(
            style['input-box'],
          )}
        >
          <label htmlFor="fullName">
            Full Name
            <input
              type="text"
              id="fullName"
              placeholder="Name"
            />
          </label>
          <PhoneInput value='amam' placeholder="777 77 77" />
        </div>
      </div>
    </div>
  );
}
