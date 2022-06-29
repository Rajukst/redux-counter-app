import { createSlice } from "@reduxjs/toolkit";

// data initialization
const initialState={
    value: 0
}
export const counterMan= createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        }
    }

})
export const {increment, decrement}= counterMan.actions;
export default counterMan.reducer;