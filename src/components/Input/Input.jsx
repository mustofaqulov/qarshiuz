import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './Input.module.scss';
import SearchIcons from '../../assets/icons/search.svg';

export function Input({ placeholder, classInp }) {
  const inputClass = classNames(
    style['input-search'],
    {
      [style.lg]: classInp === 'lg',
    },
  );
  return (
    <form>
      <label
        htmlFor="search"
        className={inputClass}
      >
        <SearchIcons />
        <input
          id="search"
          type="search"
          placeholder={placeholder}
          autoCapitalize="none"
          autoComplete="off"
        />
      </label>
    </form>
  );
}

Input.defaultProps = {
  placeholder: 'Some',
  classInp: '',
};

Input.propTypes = {
  classInp: PropTypes.string,
  placeholder: PropTypes.string,
};
