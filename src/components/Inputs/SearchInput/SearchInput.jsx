import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './search-input.module.scss';
import SearchIcons from '../../../assets/icons/search.svg';

export function SearchInput({
  placeholder,
  size,
}) {
  const inputSize = classNames(
    style['input-search'],
    {
      [style.lg]: size === 'lg',
    },
  );
  return (
    <form>
      <label
        htmlFor="search"
        className={inputSize}
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

SearchInput.defaultProps = {
  placeholder: '',
  size: '',
};

SearchInput.propTypes = {
  size: PropTypes.string,
  placeholder: PropTypes.string,
};
