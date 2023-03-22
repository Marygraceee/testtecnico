
import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../Context/FirebaseContext';


const todos = [
  { id: 1, description: 'Task 1', operator: 'John' },
  { id: 2, description: 'Task 2', operator: 'Jane' },
  { id: 3, description: 'Task 3', operator: 'John' },
  { id: 4, description: 'Task 4', operator: 'Jane' },
  { id: 5, description: 'Task 5', operator: 'John' },
  { id: 6, description: 'Task 6', operator: 'Jane' },
  { id: 7, description: 'Task 7', operator: 'John' },
  { id: 8, description: 'Task 8', operator: 'Jane' },
  { id: 9, description: 'Task 9', operator: 'John' },
  { id: 10, description: 'Task 10', operator: 'Jane' },
  { id: 11, description: 'Task 11', operator: 'Jane' },
  { id: 12, description: 'Task 12', operator: 'Jane' },
  { id: 13, description: 'Task 13', operator: 'Jane' },
];

const ActiveActivities = () => {
    const {users, activities} = useContext(FirebaseContext) 
    console.log(users, activities)
  const [operatorFilter, setOperatorFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);

  // Filter the todos based on the selected operator
  const filteredTodos = todos.filter(todo => {
    if (!operatorFilter) {
      return true;
    }
    return todo.operator === operatorFilter;
  });

  // Calculate the total number of pages needed for pagination
  const totalPages = Math.ceil(filteredTodos.length / todosPerPage);

  // Get the todos for the current page
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  // Handle changing the operator filter
  const handleOperatorChange = event => {
    setOperatorFilter(event.target.value);
    setCurrentPage(1); // Reset to the first page when the filter changes
  };

  // Handle changing the page number
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
        <div>
        <h1 className="text-[#2A3948] font-semibold text-xl tracking-wide">Attività da completare</h1>
      <div>
        <label htmlFor="operator-filter">Filter by operator:</label>
        <select id="operator-filter" onChange={handleOperatorChange} value={operatorFilter}>
          <option value="">All operators</option>
          <option value="John">John</option>
          <option value="Jane">Jane</option>
        </select>
      </div>
        </div>
     
      <ul>
        {currentTodos.map(todo => (
          <li key={todo.id}>
            {todo.description} - {todo.operator}
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <div>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
            <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActiveActivities;
