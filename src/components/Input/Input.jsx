import PropTypes from 'prop-types';
import style from './Input.module.scss';
import SearchIcons from '../../assets/icons/search.svg';

export function Input({ placeholder }) {
  return (
    <form>
      <label
        htmlFor="search"
        className={style['input-search']}
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
};

Input.propTypes = {
  placeholder: PropTypes.string,
};
