import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './search-input.module.scss';
import SearchIcons from '../../../assets/icons/search.svg';
import { Modals } from '../../Modals/SearchModals/Modals';

export function SearchInput({
  placeholder,
  size,
  modalOpen,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const inputSize = classNames(
    style['input-search'],
    {
      [style.lg]: size === 'lg',
    },
  );
  const opening = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Modals
        open={isOpen}
        close={() => setIsOpen(false)}
      />
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
            onClick={() => modalOpen && opening()}
          />
        </label>
      </form>
    </div>
  );
}

SearchInput.defaultProps = {
  placeholder: '',
  size: '',
  modalOpen: '',
};

SearchInput.propTypes = {
  size: PropTypes.string,
  placeholder: PropTypes.string,
  modalOpen: PropTypes.bool,
};
