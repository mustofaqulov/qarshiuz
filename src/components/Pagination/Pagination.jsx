import classNames from 'classnames';
import {
  useState,
  cloneElement,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import style from './pagination.module.scss';
import PrevBtnIcon from '../../assets/icons/carousel-left-icon.svg';
import NextBtnIcon from '../../assets/icons/carousel-right-icon.svg';
import { Skeleton } from '../Skeleton/Skeleton';

export function Pagination({ component }) {
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
  const pageCount = 100;

  const changePage = ({ selected }) => {
    setIsLoading(true);
    setPageNumber(selected + 1);
  };
  const displayUsers = cardData?.map(
    (cardInfo) => {
      return cloneElement(component, {
        cardInfo,
      });
    },
  );

  const arr = [1, 2, 3, 4, 5, 6];
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

      <ReactPaginate
        breakLabel="..."
        pageRangeDisplayed={3}
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
      />
    </div>
  );
}

Pagination.defaultProps = {
  component: null,
};
Pagination.propTypes = {
  component: PropTypes.node,
};
