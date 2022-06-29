import { configureStore } from "@reduxjs/toolkit";
import countDown from "../state-reducer/counter/stateSlice"
const store = configureStore({
    reducer:{
        counter: countDown
    }
})

export default store;