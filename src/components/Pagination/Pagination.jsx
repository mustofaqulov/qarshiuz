import classNames from 'classnames';
import { useState, cloneElement } from 'react';
import ReactPaginate from 'react-paginate';
import style from './pagination.module.scss';
import PrevBtnIcon from '../../assets/icons/carousel-left-icon.svg';
import NextBtnIcon from '../../assets/icons/carousel-right-icon.svg';

export function Pagination({ component }) {
  const JsonData = [
    {
      id: 1,
      firstName: 'Phineas',
      lastName: 'Franciottoi',
      email: 'pfranciottoi0@hostgator.com',
      password: 'y0pWrGzmDz',
    },
    {
      id: 2,
      firstName: 'Mikel',
      lastName: 'Gregoli',
      email: 'mgregoli1@amazon.de',
      password: 'G0VfMCL',
    },
    {
      id: 3,
      firstName: 'Moira',
      lastName: 'Mazzilli',
      email: 'mmazzilli2@163.com',
      password: '3GgdWoOfT',
    },
    {
      id: 4,
      firstName: 'Kaja',
      lastName: 'True',
      email: 'ktrue3@washington.edu',
      password: 'N6032b',
    },
    {
      id: 5,
      firstName: 'Robbie',
      lastName: 'Mc Harg',
      email: 'rmcharg4@scientificamerican.com',
      password: '9aYRY2B5Jgj',
    },
    {
      id: 6,
      firstName: 'Niki',
      lastName: 'Daber',
      email: 'ndaber5@army.mil',
      password: 'ccKCMM',
    },
    {
      id: 7,
      firstName: 'Rana',
      lastName: 'Gyrgorwicx',
      email: 'rgyrgorwicx6@booking.com',
      password: '1R3G2WJ',
    },
    {
      id: 8,
      firstName: 'Johnette',
      lastName: 'Torricella',
      email: 'jtorricella7@discuz.net',
      password: 'l6Fip9FINxzR',
    },
    {
      id: 9,
      firstName: 'Kristoforo',
      lastName: 'Slinn',
      email: 'kslinn8@scribd.com',
      password: 'pT35uEWU5y',
    },
    {
      id: 10,
      firstName: 'Wye',
      lastName: 'Bushrod',
      email: 'wbushrod9@infoseek.co.jp',
      password: 'ElyzUYgyyWC',
    },
    {
      id: 11,
      firstName: 'Aline',
      lastName: 'Boydle',
      email: 'aboydlea@woothemes.com',
      password: 'bnpqvhjNN',
    },
    {
      id: 12,
      firstName: 'Dall',
      lastName: 'Ettritch',
      email: 'dettritchb@wiley.com',
      password: 'l4LSCXxY',
    },
    {
      id: 13,
      firstName: 'Wynn',
      lastName: 'Vautier',
      email: 'wvautierc@dagondesign.com',
      password: 'w5E58sLnrvzf',
    },
    {
      id: 14,
      firstName: 'Cami',
      lastName: 'Pfaffe',
      email: 'cpfaffed@auda.org.au',
      password: 'Ne8TDr',
    },
    {
      id: 1,
      firstName: 'Phineas',
      lastName: 'Franciottoi',
      email: 'pfranciottoi0@hostgator.com',
      password: 'y0pWrGzmDz',
    },
    {
      id: 2,
      firstName: 'Mikel',
      lastName: 'Gregoli',
      email: 'mgregoli1@amazon.de',
      password: 'G0VfMCL',
    },
    {
      id: 3,
      firstName: 'Moira',
      lastName: 'Mazzilli',
      email: 'mmazzilli2@163.com',
      password: '3GgdWoOfT',
    },
    {
      id: 4,
      firstName: 'Kaja',
      lastName: 'True',
      email: 'ktrue3@washington.edu',
      password: 'N6032b',
    },
    {
      id: 5,
      firstName: 'Robbie',
      lastName: 'Mc Harg',
      email: 'rmcharg4@scientificamerican.com',
      password: '9aYRY2B5Jgj',
    },
    {
      id: 6,
      firstName: 'Niki',
      lastName: 'Daber',
      email: 'ndaber5@army.mil',
      password: 'ccKCMM',
    },
  ];
  const [users, setUsers] = useState(
    JsonData.slice(0, 50),
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
      return cloneElement(component, {
        cardInfo,
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
