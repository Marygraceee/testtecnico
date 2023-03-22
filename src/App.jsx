import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayAll, setDisplayAll] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Alice' },
    { id: 5, name: 'Mark' },
    { id: 6, name: 'Emma' },
    { id: 7, name: 'Kate' },
    { id: 8, name: 'Mike' },
    { id: 9, name: 'David' },
  ];

  const lastIndex = displayAll ? data.length : currentPage * itemsPerPage;
  const firstIndex = displayAll ? 0 : lastIndex - itemsPerPage;
  const currentData = data.slice(firstIndex, lastIndex);

  const renderItems = currentData.map((item) => (
    <div key={item.id}>Hello World, {item.name}!</div>
  ));

  const renderPagination = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          style={{
            margin: '0 5px',
            fontWeight: currentPage === i ? 'bold' : 'normal',
          }}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div>
      {renderItems}
      {data.length > itemsPerPage && (
        <div>
          {displayAll ? null : (
            <button onClick={() => setDisplayAll(true)}>Display All</button>
          )}
          {renderPagination()}
        </div>
      )}
    </div>
  );
}

export default App;
