import React from "react";
import { useDispatch } from "react-redux";
// import { deleteUsers } from "../store/slices/UserSlice";
import { clearAllUsers } from "../store/action";

export const DeleteAllUser = () => {
const dispatch=useDispatch()
  const deleteAllItems=()=>{
    dispatch(clearAllUsers())

  }
  return <div><button onClick={()=>deleteAllItems()}>DeleteAllUser</button></div>;
};
