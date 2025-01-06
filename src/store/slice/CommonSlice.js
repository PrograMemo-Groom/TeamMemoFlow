import {createSlice} from "@reduxjs/toolkit";

const CommonSlice = createSlice({
    name: "commonSlice",
    // redux init state justify
    initialState: {
        isOpenDialog: false,
        isLogin: false,
    },
    // redux action justify
    reducers: {
        toggleDialog: (state, action) => {
            state.isOpenDialog = !state.isOpenDialog;
        },
        setIsLogin: (state, action) => {
            state.isLogin = !state.isLogin;
        }
    }
})

// redux action export
export const { toggleDialog, setIsLogin } = CommonSlice.actions;
// redux reducer export
export default CommonSlice.reducer;
