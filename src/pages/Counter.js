import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/state-reducer/counter/stateSlice';
const Counter = () => {
    // emplementing useSelector 
    const count= useSelector((state)=>state.counter.value);
    const dispatch= useDispatch()
    return (
        <div>
            <h1>This is Counter Man</h1>
            <h3>{count}</h3>
            <button onClick={()=>dispatch(increment())}>Increse</button>
            <button onClick={()=>dispatch(decrement())}>Decrese</button>
        </div>
    );
};

export default Counter;