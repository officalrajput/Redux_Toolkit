import {createSlice} from "@reduxjs/toolkit"
import { clearAllUsers } from "../action";
const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            // state.push(action.payload)
            return [...state, action.payload];
            
        },
        removeUser(state,action){
            // console.log(state.splice(action.payload,5));
            state.splice(action.payload,1)
        },
        // deleteUsers(state,action){
        //     return [];
        // }
    },
    extraReducers(builder){
        builder.addCase(clearAllUsers,()=>{
            return []
        })
    }
})
export const {addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;