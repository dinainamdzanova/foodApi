import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "./foodSlice";

const store = configureStore({
    reducer: foodSlice
})

export default store;