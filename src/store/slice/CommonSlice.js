import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const CommonSlice = createSlice({
    name: "commonSlice",
    initialState: {
        isOpenDialog: false,
    },
    reducers: {
        isOpenDialog: (state, action) => {
            state.openDialog = !state.isOpenDialog;
        }
    }
})

export default CommonSlice.reducer;
