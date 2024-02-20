import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './work-time-modal.module.scss';
import ClouseIcon from '../../assets/icons/clouse-icon-white.svg';
import { workTimeData } from '../../utils/mock';

export function WorkTimeModal({ toggleModal }) {
  return (
    <section
      className={classNames(style['time-modal'])}
    >
      <div
        className={classNames(
          style['modal-head'],
        )}
      >
        <h5>Schedule</h5>
        <ClouseIcon onClick={toggleModal} />
      </div>
      <div className={classNames(style.times)}>
        {workTimeData.map(({ id, day, time }) => {
          return (
            <div
              key={id}
              className={classNames(
                style['time-info'],
              )}
            >
              <strong>{day}</strong>
              <div
                className={classNames(style.time)}
              >
                {time}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
WorkTimeModal.defaultProps = {
  toggleModal: () => {},
};

WorkTimeModal.propTypes = {
  toggleModal: PropTypes.func,
};
