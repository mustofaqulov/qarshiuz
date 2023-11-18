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

export function Pagination({
  component,
  componentData,
}) {
  const [cardData, setCardData] = useState(
    componentData,
  );
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    fetch('')
      .then((response) => response.json())
      .then((data) => {
        setCardData(data);
        setIsLoading(false);
      });
  }, [pageNumber]);

  const displayUsers = cardData?.map(
    (cardInfo) => {
      return cloneElement(component, {
        cardInfo,
      });
    },
  );

  const pageCount = 10;

  const changePage = ({ selected }) => {
    setPageNumber(selected + 1);
    setIsLoading(true);
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

Pagination.defaultProps = {
  component: '',
};
Pagination.propTypes = {
  component: PropTypes.string,
};
