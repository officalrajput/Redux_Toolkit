import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { removeUser } from '../store/slices/UserSlice';
;


const DisplayData = () => {
    const dispatch=useDispatch();
 const deleteUser=(id)=>{
    dispatch(removeUser(id))


 }

   const Data=useSelector((state)=>{
     return state.users;

    })

  return <div>
  {Data.map((user,id)=>{
   return <li key={id}>
    {user}

    <button><MdDelete onClick={()=>deleteUser(id)} /></button>
  </li>
  })}
    </div>
 
}

export default DisplayData; 