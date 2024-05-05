import React, { useContext } from "react";
import { GlobalContext } from "../../useContext/Context";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = (props) => {
  const { isMobile } = props;
  const { totalItems, currentPage, setCurrentPage } = useContext(GlobalContext);

  const pageLimit = 5;
  const itemsPerPage = 20;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const PageNumbers = ({ length }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const totalPages = pageNumbers.length;
    const maxPage = Math.min(currentPage + pageLimit, totalPages);
    const minPage = Math.max(maxPage - pageLimit, 1);
    const minPageNum = minPage >= 3 ? minPage - 3 : minPage >= 2 ? minPage - 2 : minPage - 1;
    const maxPageNum = minPage >= 3 ? maxPage - 2 : minPage >= 2 ? maxPage - 1 : maxPage;

    return (
      <div className="page-numbers">
        <button
          className="page-next-prev"
          disabled={currentPage === 1}
          onClick={() => paginate(Math.max(minPage - 1, 1))}>
          <span>
            <FaChevronLeft />
          </span>{" "}
          {!isMobile && "Prev"}
        </button>
        {pageNumbers.slice(minPageNum, maxPageNum).map((number) => (
          <button key={number} onClick={() => paginate(number)} className={currentPage === number ? "active" : null}>
            {number}
          </button>
        ))}

        <button
          className="page-next-prev"
          disabled={currentPage === totalPages}
          onClick={() => paginate(Math.min(maxPage, totalPages) - 1)}>
          {!isMobile && "Next"}
          <span>
            <FaChevronRight />
          </span>
        </button>
      </div>
    );
  };

  return (
    <div className="pagination">
      <PageNumbers length={totalItems} />
    </div>
  );
};

export default Pagination;
