import {createSlice} from "@reduxjs/toolkit";

const CommonSlice = createSlice({
    name: "commonSlice",
    initialState: {
        isOpenDialog: false,
        isLogin: false,
    },
    reducers: {
        toggleDialog: (state, action) => {
            state.isOpenDialog = !state.isOpenDialog;
        },
        setIsLogin: (state, action) => {
            state.isLogin = !state.isLogin;
        }
    }
})

export const { toggleDialog, setIsLogin } = CommonSlice.actions;
export default CommonSlice.reducer;
