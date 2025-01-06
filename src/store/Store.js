import {configureStore} from "@reduxjs/toolkit";
import commonReducer from "./slice/CommonSlice";

const store = configureStore({
    reducer: {
        // user: userReducer,
        common: commonReducer,
    }
})

export default store;