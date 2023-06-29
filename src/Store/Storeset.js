import { configureStore } from "@reduxjs/toolkit";
//import { useDispatch } from "react-redux";
import { PersonSlice } from "./Info";

const Store = configureStore({
    reducer: {
        EmailId : PersonSlice.reducer,
        Cart : PersonSlice.reducer,
        Name:PersonSlice.reducer,
        Address:PersonSlice.reducer,
        Password:PersonSlice.reducer
    }
})
export default Store;
