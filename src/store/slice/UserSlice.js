import {createSlice} from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "UserSlice",
    initialState: {
        userLogin: {
            id: "",
            password: "",
            token: "",
        }
    },
    reducers: {
        setUserLogin: (state, action) => {
            const {id, password} = action.payload;
            console.log("store: ", {id, password});
            state.userLogin.id = id;
            state.userLogin.password = password;
        }
    }
})

export const { setUserLogin } = UserSlice.actions;
export default UserSlice.reducer;
