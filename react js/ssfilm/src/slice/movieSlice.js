import {createSlice} from "@reduxjs/toolkit"
import films from "../db/film"

const movieSlice = createSlice({
    name: "movie",
    initialState: films
})

export default movieSlice.reducer;