import React from 'react';

const Pagination = ({totalPages,page,getNextPage,getPreviousPage }) => {

  
    return (
      <div className="flex items-center justify-center mt-4">
        <button
          onClick={() => getPreviousPage()}
          disabled={page === 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
  
        <span className="mx-4">
          Page {page} of {totalPages}
        </span>
  
        <button
         
          onClick={() => getNextPage()}
          disabled={page === totalPages}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;