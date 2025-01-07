import {configureStore} from "@reduxjs/toolkit";
import commonReducer from "./slice/CommonSlice";
import userReducer from "./slice/UserSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        common: commonReducer,
    }
})

export default store;
