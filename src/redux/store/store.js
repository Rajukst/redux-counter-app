import { configureStore } from "@reduxjs/toolkit";
import myCount from "../state-reducer/counter/stateSlice";

const store = configureStore({
    reducer:{
        counter: myCount

    }
})

export default store;