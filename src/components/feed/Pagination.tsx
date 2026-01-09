import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { parsePage } from "../../utils/pageUtils";
import type { PaginationData } from "../../types";
import { Button } from "../ui";

interface PaginationProps {
  pagination: PaginationData;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pagination,
  onPageChange,
}) => {
  const currentPage = parsePage(pagination.currentPage);
  const totalPages = pagination.totalPages;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2 mt-8 mb-8">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!pagination.hasPreviousPage}
        className="p-2 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <FiChevronLeft size={20} />
      </Button>

      {pages.map((page, index) => (
        <Button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..." || page === currentPage}
          className={`px-3 py-2 rounded border transition-colors ${
            page === currentPage
              ? "bg-black text-white"
              : "border-gray-300 hover:bg-gray-100"
          }`}
        >
          {page}
        </Button>
      ))}

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!pagination.hasNextPage}
        className="p-2 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <FiChevronRight size={20} />
      </Button>
    </div>
  );
};

export default Pagination;
