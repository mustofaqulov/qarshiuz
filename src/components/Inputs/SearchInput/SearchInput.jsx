import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './search-input.module.scss';
import SearchIcons from '../../../assets/icons/search.svg';
// import { Modals } from '../../Modals/Modals';
// import { useEffect, useState } from 'react';

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
  // const [modal, setModal] = useState(false);

  // const toggleModal = () => {
  //   setModal(!modal);
  // };
  // if (modal) {
  //   document.body.classList.add('active-modal');
  // } else {
  //   document.body.classList.remove(
  //     'active-modal',
  //   );
  // }
  // useEffect(() => {
  //   document.body.style.overflow = modal
  //     ? 'hidden'
  //     : 'auto';
  // }, [modal]);
  return (
    <form>
      {/* {modal && <Modals />} */}
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
          // onClick={toggleModal}
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
