import { Meta } from "../../types/types";
import { scrollToTop } from "../../utils/ScrollTop";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface PaginationProps {
  meta: Meta;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({ meta, setPage }: PaginationProps) {
  const currentPage = meta.currentPage;
  const maxPages = Math.max(5, Math.min(meta.pageCount, 5));
  const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  const endPage = Math.min(meta.pageCount, startPage + maxPages - 1);

  const handleNextPage = () => {
    if (meta.isLastPage) return;
    setPage((prev) => prev + 1);
    scrollToTop();
  };

  const handlePreviousPage = () => {
    if (meta.isFirstPage) return;
    setPage((prev) => prev - 1);
    scrollToTop();
  };

  const handlePageClick = (page: number) => {
    setPage(page);
    scrollToTop();
  };

  return (
    <nav aria-label="Pagination" className="mb-10 mt-3">
      <ul className="flex items-center justify-center -space-x-px h-8 text-sm">
        <li>
          <button
            className="group flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 rounded-s-lg text-neutral-500 bg-neutral-50 border-neutral-300 hover:bg-neutral-200 hover:text-neutral-700 dark:bg-neutral-950 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
            onClick={handlePreviousPage}
            disabled={meta.isFirstPage}
          >
            <span className="sr-only">Previous</span>
            <PiCaretLeftBold className="text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-400 group-hover:dark:text-neutral-50" />
          </button>
        </li>

        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <li key={index}>
            <button
              className={`flex items-center justify-center px-3 h-8 leading-tight  ${
                startPage + index === currentPage
                  ? "text-neutral-800 border border-neutral-300 bg-neutral-200 hover:bg-neutral-300 hover:text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700 dark:hover:text-neutral-50"
                  : "text-neutral-500 bg-neutral-50 border border-neutral-300 hover:bg-neutral-200 hover:text-neutral-700 dark:bg-neutral-950 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
              }`}
              onClick={() => handlePageClick(startPage + index)}
            >
              {startPage + index}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={handleNextPage}
            className="group flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg text-neutral-500 bg-neutral-50 border-neutral-300 hover:bg-neutral-200 hover:text-neutral-700 dark:bg-neutral-950 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
            disabled={meta.isLastPage}
          >
            <span className="sr-only">Next</span>
            <PiCaretRightBold className="text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-400 group-hover:dark:text-neutral-50" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

// ACTIVE BUTTON
{
  /* <li>
  <button
    aria-current="page"
    className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-neutral-800 border border-neutral-300 bg-neutral-200 hover:bg-neutral-300 hover:text-neutral-700 dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-600 dark:hover:text-neutral-50"
  >
    3
  </button>
</li>; */
}
