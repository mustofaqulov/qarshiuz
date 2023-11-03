import classNames from 'classnames';
import { useState } from 'react';
import { Options } from './Options';
import SelectIcon from '../../assets/icons/select-icon.svg';
import style from './select.module.scss';

export function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('High rating');
  return (
    <div className={classNames([style.select])}>
      <p>Sort by</p>
      <div
        className={classNames(
          style['select-content'],
        )}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={classNames(
            isOpen && [style.active],
          )}
        >
          {text} <SelectIcon />
        </button>
        {isOpen && (
          <div
            className={classNames([
              style.options,
            ])}
          >
            {Options.map(({ label, value }) => (
              <option
                key={value}
                onClick={(e) => {
                  setIsOpen(false);
                  setText(e.target.textContent);
                }}
              >
                {label}
              </option>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
