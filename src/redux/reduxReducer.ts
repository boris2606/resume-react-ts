import { createSlice } from "@reduxjs/toolkit";
import { navigation } from "../data/navigation";

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        navigation
    },
    reducers: {
        getDataGameList(state,action){

        },
    }
})

export default toolkitSlice.reducer
export const {
    getDataGameList
} = toolkitSlice.actions