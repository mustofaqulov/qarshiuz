import classNames from 'classnames';
import { useState, cloneElement } from 'react';
import ReactPaginate from 'react-paginate';
import style from './pagination.module.scss';
import PrevBtnIcon from '../../assets/icons/carousel-left-icon.svg';
import NextBtnIcon from '../../assets/icons/carousel-right-icon.svg';
import { eventsCardData } from '../../utils/mock/events-card.mock';

export function Pagination({ component }) {
  const [users, setUsers] = useState(
    eventsCardData,
  );
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 15;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(
      pagesVisited,
      pagesVisited + usersPerPage,
    )
    .map((cardInfo) => {
      const {
        status,
        date,
        title,
        location,
        cardImg,
      } = cardInfo;
      return cloneElement(component, {
        status,
        date,
        title,
        location,
        cardImg,
      });
    });

  const pageCount = Math.ceil(
    users.length / usersPerPage,
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={classNames(style.pagination)}>
      <div
        className={classNames(
          style['users-content'],
        )}
      >
        {displayUsers}
      </div>
      <ReactPaginate
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
      />
    </div>
  );
}
