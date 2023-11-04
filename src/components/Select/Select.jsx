import { useState, useRef } from 'react';
import classNames from 'classnames';
import SelectIcon from '../../assets/icons/select-icon.svg';
import style from './select.module.scss';

const sortData = [
  {
    id: '1',
    content: 'Featured',
  },
  {
    id: '2',
    content: 'High rating',
  },
  {
    id: '3',
    content: 'Low rating',
  },
  {
    id: '4',
    content: 'Most recent',
  },
  {
    id: '5',
    content: 'A - Z',
  },
];

export function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('High rating');
  const handleClick = (option) => {
    setIsOpen(false);
    setText(option);
  };

  const ulRef = useRef();
  const dropdownRef = useRef();

  window.addEventListener('click', (e) => {
    if (
      !ulRef.current.contains(e.target) &&
      !dropdownRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  });

  return (
    <div className={classNames(style.select)}>
      <div
        ref={dropdownRef}
        className={classNames(
          style['select-button'],
        )}
      >
        <p>Sort by</p>
        <div
          className={classNames(
            style.dropdown,
            isOpen && style.active,
          )}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
          >
            {text} <SelectIcon />
          </button>
        </div>
      </div>
      {isOpen && (
        <ul ref={ulRef}>
          {sortData.map(({ content, id }) => (
            <li key={id}>
              <button
                onClick={() =>
                  handleClick(content)
                }
              >
                {content}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
