import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useContext, useState } from "react"
import { FirebaseContext } from '../../Context/FirebaseContext';
import TextField from '@mui/material/TextField';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';

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


      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(operator, description);
      
        await setDoc(doc(db, "activities", operator + description), {
          operator: operator,
          description: description,
          completed: false
        });
      
        setDescription("");
        setOperator("");
      };
  
  return (
    <div className="w-full flex flex-col items-start justity-center">
        <h3 className="text-[#2A3948] font-extrabold ">NUOVA ATTIVITÀ</h3>
      
        <form onSubmit={handleSubmit} className="w-full bg-[#CFD8E0]">
  <div className="flex w-full p-5 gap-2">
    <div className="w-full">
      <TextField required value={description} onChange={handleDescriptionChange} className="bg-white" fullWidth id="Descrizione" label="Descrizione"  />
    </div>
    <div className="w-full ">
    <FormControl fullWidth className="bg-white">
      <InputLabel  style={{ paddingLeft: "0.5rem"}} id="Operatore">Operatore</InputLabel>
        <Select
        required
          labelId="Operatore"
          id="Operatore"
          value={operator}
          label="Operatore"
          onChange={handleOperatorChange}
        >
    {users && users.map((user) => (
        <MenuItem key={user} value={user}>{user}</MenuItem>
    ))}
  </Select>
</FormControl>
    </div>
  </div>
  <div className="flex xl:justify-end justify-center items-center pb-5 px-5 gap-2">
    <button 
    className="bg-[#2A3948] hover:bg-[#384c5f] text-white px-16 py-3 rounded-lg w-[12rem]"
    onClick={() => {
        setDescription("");
        setOperator("")
        }}>
    Annulla
        </button>
    <button type='submit' className="bg-[#4EADC1] hover:bg-[#58c0d4] text-white px-16 py-3 rounded-lg w-[12rem]">Salva</button>
  </div>
</form>

        </div>
  )
}

export default NewActivity