import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useContext, useState } from "react";
import { FirebaseContext } from "../../Context/FirebaseContext";
import Pagination from "./Pagination";

const CompletedActivities = () => {
  const { users, completedActivities } = useContext(FirebaseContext);

  const [operatorFilter, setOperatorFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activitiesPerPage, setActivitiesPerPage] = useState(5);

  const filteredActivities = completedActivities.filter((activity) => {
    return !operatorFilter || activity.operator === operatorFilter;
  });

  const totalPages = Math.ceil(filteredActivities.length / activitiesPerPage);
  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = filteredActivities.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );

  const handleOperatorChange = (event) => {
    setOperatorFilter(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber, currentPage);
  };

  console.log(users, completedActivities);

  return (
    <section className="w-full h-full xl:px-12 px-4 py-6 flex flex-col gap-2 justify-between">
      <div className="flex flex-col gap-2">
        <div className="w-full flex flex-col items-start justity-center gap-2">
          <h3 className="text-[#2A3948] font-semibold text-xl tracking-wide">
            Attività da completare
          </h3>

          <FormControl fullWidth className="bg-white">
            <InputLabel
              style={{ paddingLeft: "0.5rem" }}
              id="Filtra per operatore"
            >
              Filtra per operatore
            </InputLabel>
            <Select
              labelId="Filtra per operatore"
              id="Filtra per operatore"
              value={operatorFilter}
              label="Filtra per operatore"
              onChange={handleOperatorChange}
            >
              <MenuItem value="">Tutti</MenuItem>
              {users &&
                users.map((user) => (
                  <MenuItem key={user} value={user}>
                    {user}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>

        <div className="xl:h-[22rem] h-[30rem] overflow-scroll scrollbar-hide rounded-md xl:text-base text-sm">
          <table className="w-full">
            <thead className="bg-[#BE0010] text-white">
              <tr>
                <th className="text-left px-6 py-4 xl:max-w-[20rem] xl:w-[20rem] w-[7rem] max-w-[7rem]">
                  Attività
                </th>
                <th className="text-left px-6 py-4">Operatore</th>
                <th className="xl:block hidden"></th>
                <th className="xl:block hidden"></th>
                <th className="xl:block hidden"></th>
                <th className="xl:block hidden"></th>
              </tr>
            </thead>
            <tbody className="shadow-lg">
              {currentActivities.map((activity, index) => (
                <tr
                  key={activity.id}
                  className={`${
                    index % 2 === 0 ? "bg-[#FAFBFC]" : "bg-[#F0F3F6]"
                  } justify-between`}
                >
                  <td className="text-left px-6 py-4 text-black font-semibold xl:max-w-[20rem] xl:w-[20rem] w-[7rem] max-w-[7rem] overflow-auto ">
                    {activity.description}
                  </td>
                  <td className="text-left px-6 text-black font-semibold">
                    {activity.operator}
                  </td>
                  <td className="xl:block hidden"></td>
                  <td className="xl:block hidden"></td>
                  <td className="xl:block hidden"></td>
                  <td className="xl:block hidden"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex xl:justify-between xl:items-end justify-center items-center gap-5 xl:h-[8rem] xl:flex-row flex-col">
        <div className="flex justify-center items-center gap-2">
          <h3 className="text-sm ">Visualizza elementi</h3>
          <FormControl>
            <Select
              onChange={(e) => {
                setActivitiesPerPage(e.target.value);
              }}
              id="Elementi"
              value={activitiesPerPage}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default CompletedActivities;
