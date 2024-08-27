import React, { useState, useEffect } from 'react';
import RestCard from '../RestCards/RestCards.jsx';
import classes from './PaginationRestCardsComponent.module.css'


const PaginationComponent = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const offset = (currentPage - 1) * itemsPerPage;
    setCurrentItems(data.slice(offset, offset + itemsPerPage));
  }, [currentPage, data, itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className={classes.grid}>
        {currentItems.map((item, index) => (
          <RestCard key={index} url={item.url} alt={item.alt} text={item.text} />
        ))}
      </div>
      <div className={classes.pagination}>
        <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
          &lt;&lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={page === currentPage ? classes.active : ''}
          >
            {page}
          </button>
        ))}
        <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;