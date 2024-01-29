import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";

const Store=configureStore({
    reducer:{
        users:UserSlice,

    }
   
})
console.log(Store)

export default Store;