import React from 'react'

const Pagination = ({totalPages, currentPage, handlePageChange}) => {
  return (
    <> {totalPages > 1 && (
        <div className="text-[#2A3948] flex flex-row justify-center items-center text-sm">
          <button 
          className="h-[2.5rem] px-4 bg-transparent border-[#2a39482a] border-[0.2px] hover:bg-[#616E79] hover:text-white rounded-l-md font-bold cursor-pointer"
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            Precedente
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(pageNumber => {
              if (totalPages <= 5) {
                return true;
              }
              const firstVisiblePage = currentPage - 2;
              const lastVisiblePage = currentPage + 2;
              return pageNumber === 1 || pageNumber === totalPages ||
                (pageNumber >= firstVisiblePage && pageNumber <= lastVisiblePage);
            })
            .map(pageNumber => (
              <button className={`aspect-square h-[2.5rem] bg-transparent border-[#2a39482a] border-[0.2px] font-bold hover:bg-[#616E79] hover:text-white ${pageNumber === currentPage && "bg-black text-white"}`} key={pageNumber} onClick={() => {handlePageChange(pageNumber)}}>
                {pageNumber}
              </button>
            ))}
          <button 
          className="h-[2.5rem] px-4 bg-transparent border-[#2a39482a] border-[0.2px] rounded-r-md font-bold hover:bg-[#616E79] hover:text-white cursor-pointer"
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
          >
            Successivo
          </button>
        </div>
      )}</>
  )
}

export default Pagination