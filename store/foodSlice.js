import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getFoods = createAsyncThunk('foods/getFoods', async function () {
    const response = await axios.get('https://yummly2.p.rapidapi.com/feeds/search')
    console.log(response)
    return response.data;
})

const foodSlice = createSlice({
    name: 'foods',
    initialState: {
        foods: [],
        status: ''
    },
    reducers: {

    },
    extraReducers: {
        [getFoods.pending]: (state) => {
            state.status = 'pending'
        },
        [getFoods.fulfilled]: (state, action) => {
            state.foods = action.payload
            state.status = 'fulfilled'
        }
    }
})

export const foodActions = foodSlice.actions;
export default foodSlice.reducer;