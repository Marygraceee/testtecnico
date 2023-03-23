import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../Context/FirebaseContext';
import NewActivity from './NewActivity';


const ActiveActivities = () => {
    const { users, activities } = useContext(FirebaseContext);

    const [operatorFilter, setOperatorFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const activitiesPerPage = 5;
  
    const filteredActivities = activities.filter(activity => {
      return !operatorFilter || activity.operator === operatorFilter;
    });
  
    const totalPages = Math.ceil(filteredActivities.length / activitiesPerPage);
    const indexOfLastActivity = currentPage * activitiesPerPage;
    const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
    const currentActivities = filteredActivities.slice(indexOfFirstActivity, indexOfLastActivity);
  
    const handleOperatorChange = event => {
      setOperatorFilter(event.target.value);
      setCurrentPage(1);
    };
  
    const handlePageChange = pageNumber => {
      setCurrentPage(pageNumber);
    };
  
    console.log(users, activities);

  return (
    <section className="w-full h-full px-12 py-6 flex flex-col gap-2">


        <div className="w-full flex flex-col items-start justity-center gap-2">
        <h3 className="text-[#2A3948] font-semibold text-xl tracking-wide">Attività da completare</h3>
      
      <FormControl fullWidth className="bg-white">
      <InputLabel  style={{ paddingLeft: "0.5rem"}} id="Filtra per operatore">Filtra per operatore</InputLabel>
        <Select
          labelId="Filtra per operatore"
          id="Filtra per operatore"
          value={operatorFilter}
          label="Filtra per operatore"
          onChange={handleOperatorChange}
          
          
        >
     <MenuItem value="">Tutti</MenuItem>
    {users && users.map((user) => (
        <MenuItem key={user} value={user}>{user}</MenuItem>
    ))}
  </Select>
</FormControl>
      
        </div>
     
<div className="h-[22rem]">
<table className="w-full rounded-lg overflow-hidden">
  <thead className="bg-[#BE0010] text-white">
    <tr>
      <th className="text-left px-6 py-4">Attività</th>
      <th className="text-left py-4">Operatore</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {currentActivities.map((activity, index) => (
      <tr
        key={activity.id}
        className={`${index % 2 === 0 ? 'bg-[#FAFBFC]' :  'bg-[#F0F3F6]'} justify-between`}
      >
        <td className="text-left px-6 py-4 text-black font-semibold w-[20rem] overflow-auto">{activity.description}</td>
        <td className="text-left text-black font-semibold">{activity.operator}</td>
        <td className=""></td>
        <td className=""></td>
        <td className=""></td>
        <td className="text-right px-6">
          <button className="bg-[#2A3948] hover:bg-[#3f556b] text-white font-bold px-12 py-2 rounded">
            svolgi
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
</div>
       


<NewActivity />

      



      {totalPages > 1 && (
        <div>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
            <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default ActiveActivities;
