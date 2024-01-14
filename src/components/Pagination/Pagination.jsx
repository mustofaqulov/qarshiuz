import classNames from 'classnames';
import {
  useState,
  cloneElement,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import style from './pagination.module.scss';
import PrevBtnIcon from '../../assets/icons/carousel-left-icon.svg';
import NextBtnIcon from '../../assets/icons/carousel-right-icon.svg';
import { Button } from '../Button/Button';
import { Skeleton } from '../Skeleton/Skeleton';

export function Pagination(props) {
  const { component } = props;
  const [cardData, setCardData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${pageNumber}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setCardData(data);
        setIsLoading(false);
      });
  }, [pageNumber]);

  const changePageNumberBtn = (e) => {
    setPageNumber(e.target.innerText);
  };
  const nextPageBtn = () => {
    setPageNumber(1 * pageNumber + 1);
  };
  const prevPageBtn = () => {
    if (pageNumber <= 1) {
      return;
    }
    setPageNumber(pageNumber - 1);
  };
  const displayUsers = cardData?.map(
    (cardInfo) => {
      return cloneElement(component, {
        cardInfo,
      });
    },
  );

  const arr = [1, 2, 3, 4, 5];
  return (
    <div className={classNames(style.pagination)}>
      <div
        className={classNames(
          style['users-content'],
        )}
      >
        {isLoading === true
          ? arr.map((i) => <Skeleton key={i} />)
          : displayUsers}
      </div>
      <div className={classNames(style.buttons)}>
        <div
          className={classNames(
            style['prev-btn'],
          )}
        >
          <Button
            btnClass="circle-btn"
            icon={<PrevBtnIcon />}
            onClick={prevPageBtn}
          />
        </div>
        <div
          className={classNames(
            style['number-btn'],
          )}
        >
          <Button
            btnClass="circle-btn"
            title={1}
            onClick={changePageNumberBtn}
          />
          <Button
            btnClass="circle-btn"
            title={2}
            onClick={changePageNumberBtn}
          />
          <Button
            btnClass="circle-btn"
            title={3}
            onClick={changePageNumberBtn}
          />
        </div>
        <div
          className={classNames(
            style['next-btn'],
          )}
        >
          <Button
            icon={<NextBtnIcon />}
            btnClass="circle-btn"
            onClick={nextPageBtn}
          />
        </div>
      </div>
      {/* <ReactPaginate
        breakLabel="..."
        pageRangeDisplayed={4}
        marginPagesDisplayed={0}
        previousLabel={<PrevBtnIcon />}
        nextLabel={<NextBtnIcon />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={classNames(
          style['pagination-btn'],
        )}
        pageLinkClassName={classNames(
          style['page-num'],
        )}
        previousClassName={classNames(
          style['prev-btn'],
        )}
        nextClassName={classNames(
          style['next-btn'],
        )}
        activeClassName={classNames(
          style['pagination-active'],
        )}
      /> */}
    </div>
  );
}

Pagination.defaultProps = {
  component: '',
};
Pagination.propTypes = {
  component: PropTypes.string,
};
