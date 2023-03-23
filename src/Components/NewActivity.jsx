import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useContext, useState } from "react"
import { FirebaseContext } from '../../Context/FirebaseContext';
import TextField from '@mui/material/TextField';

const NewActivity = () => {
    const { users, activities } = useContext(FirebaseContext);

    const [operator, setOperator] = useState("");
    const [description, setDescription] = useState("")


    const handleOperatorChange = event => {
        setOperator(event.target.value);
      };

      const handleDescriptionChange = event => {
        setDescription(event.target.value);
      };
  
  return (
    <div className="w-full flex flex-col items-start justity-center gap-2">
        <h3 className="text-[#2A3948] font-extrabold ">NUOVA ATTIVITÀ</h3>
      
        <FormControl fullWidth className="bg-[#CFD8E0]">
  <div className="flex w-full p-5 gap-2">
    <div className="w-full">
      <TextField value={description} onChange={handleDescriptionChange} className="bg-white" fullWidth id="Descrizione" label="Descrizione"  />
    </div>
    <div className="w-full ">
    <FormControl fullWidth className="bg-white">
      <InputLabel  style={{ paddingLeft: "0.5rem"}} id="Filtra per operatore">Filtra per operatore</InputLabel>
        <Select
          labelId="Filtra per operatore"
          id="Filtra per operatore"
          value={operator}
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
  </div>
  <div className="flex justify-end items-center p-5">
    <button onClick={() => {
        setDescription("");
        setOperator("")
        }}>Annulla</button>
    <button onClick={() => {console.log(operator, description)}} >Salve</button>
  </div>
</FormControl>

        </div>
  )
}

export default NewActivity