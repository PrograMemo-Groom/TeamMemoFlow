import {createSlice} from "@reduxjs/toolkit";

const CommonSlice = createSlice({
    name: "commonSlice",
    // redux init state justify
    initialState: {
        isOpenDialog: false,
        isLogin: false,
        isFormValid: {
            totalValid:false,
            info: {}
        },
    },
    // redux action justify
    reducers: {
        toggleDialog: (state, action) => {
            state.isOpenDialog = !state.isOpenDialog;
        },
        setIsLogin: (state, action) => {
            state.isLogin = !state.isLogin;
        },
        setIsFormValid: (state, action) => {
            const { tag, isValid } = action.payload;
            console.log("store:", { tag, isValid });

            state.isFormValid.info[tag] = isValid;
            state.isFormValid.totalValid = Object.values(state.isFormValid.info).every((value) => value);
        }
    }
})

// redux action export
export const { toggleDialog, setIsLogin, setIsFormValid } = CommonSlice.actions;
// redux reducer export
export default CommonSlice.reducer;
