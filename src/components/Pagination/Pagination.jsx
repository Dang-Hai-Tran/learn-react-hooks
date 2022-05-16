import React from 'react';
import './Pagination.scss';

const Pagination = (props) => {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);
  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };
  return (
    <div className="container-pagination">
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        Prev
      </button>
      <button disabled={_page >= totalPages} onClick={() => handlePageChange(_page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
