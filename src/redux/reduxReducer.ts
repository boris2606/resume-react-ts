import { createSlice } from "@reduxjs/toolkit";
import { navigation } from "../data/navigation";
import { offers } from "../data/offers";
import { skills } from "../data/skills";

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        navigation,
        offers,
        skills
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