/* eslint-disable import/extensions */

import { PaginationTyping } from '@/types/Pagination';

const usePaginationLogic = (
  currentPage: number,
  postsPerPage: number,
  totalPosts: number | undefined,
) => {
  const showingFrom = currentPage * postsPerPage - (postsPerPage - 1);
  const showingTo = currentPage * postsPerPage;
  const disableBackBtn = currentPage * postsPerPage - (postsPerPage - 1) === 1;
  const disableFrontBtn = totalPosts ? (currentPage * postsPerPage >= totalPosts) : true;

  return {
    showingFrom,
    showingTo,
    disableBackBtn,
    disableFrontBtn,
  };
};

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage,
  isLoading,
}: PaginationTyping) {
  const {
    showingFrom,
    showingTo,
    disableBackBtn,
    disableFrontBtn,
  } = usePaginationLogic(currentPage, postsPerPage, totalPosts);

  return (
    <div className={`flex justify-between ${isLoading ? 'hidden' : 'visible'} space-x-1 md:space-x-4 items-center px-2 md:px-0 py-2 mt-4`}>
      <div>
        <p className="text-sm text-white">
          Showing
          {' '}
          <span className="font-medium">{showingFrom}</span>
          {' '}
          to
          <span className="font-medium">
            {' '}
            {showingTo}
            {' '}
          </span>
          of
          <span className="font-medium">
            {' '}
            {totalPosts}
            {' '}
          </span>
          Results
        </p>
      </div>
      <div>
        <div
          className="relative z-0 flex items-center rounded-md bg-cyan-300 shadow-sm"
          aria-label="Pagination"
        >
          <button
            type="button"
            onClick={() => {
              paginateBack();
            }}
            disabled={disableBackBtn}
            className="pagination_btn rounded-l-md"
          >
            Previous
          </button>

          <span className="text-blue-900">|</span>

          <button
            type="button"
            onClick={() => {
              paginateFront();
            }}
            disabled={disableFrontBtn}
            className="pagination_btn rounded-r-md text-right"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
