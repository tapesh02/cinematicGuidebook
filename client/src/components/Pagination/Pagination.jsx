import React, { useContext } from "react";
import { GlobalContext } from "../../useContext/Context";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = () => {
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

        return (
            <div className="page-numbers">
                <button
                    className="page-next-prev"
                    disabled={currentPage === 1}
                    onClick={() => paginate(Math.max(minPage - 1, 1))}>
                    <span>
                        <FaChevronLeft />
                    </span>{" "}
                    Prev
                </button>
                {pageNumbers.slice(minPage - 1, maxPage).map((number) => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={currentPage === number ? "active" : null}>
                        {number}
                    </button>
                ))}
                <button
                    className="page-next-prev"
                    disabled={currentPage === totalPages}
                    onClick={() => paginate(Math.min(maxPage, totalPages) - 1)}>
                    Next{" "}
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
