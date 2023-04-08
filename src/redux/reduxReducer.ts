import { createSlice } from "@reduxjs/toolkit";
import { navigation } from "../data/navigation";
import { offers } from "../data/offers";
import { skills } from "../data/skills";
import { educations } from "../data/education";
import { experience } from "../data/experience";
import { certificates } from "../data/certificates";
import { portfolio } from "../data/portfolio";

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        navigation,
        offers,
        skills,
        educations,
        experience,
        certificates,
        portfolio
    },
    reducers: {
        // Here insert actions
    }
})

export default toolkitSlice.reducer
export const {
    // Here insert actions name
} = toolkitSlice.actions