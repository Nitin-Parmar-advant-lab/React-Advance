// import { createStore } from "redux";

import { configureStore, createSlice } from "@reduxjs/toolkit";
// other alternative for createSlice is createReducer

import counterSliceReducer from "./counter.js"
import authSliceReducer from "./auth.js"

// const store = createStore(counterSlice.reducer);

// if for bigger appliction we might have multiple applictions
// for that we can create store like this:
// in that we have to define main reducer or default reducer

// const store = configureStore({
//     reducer: counterSlice.reducer,
// });


// for multiple reducer we can use object key value for that, like this


const store = configureStore({
    reducer: { counter: counterSliceReducer, auth: authSliceReducer },
});

export default store;

// very important
//----------------------------------------------------
/*
Now this is VERY IMPORTANT.

The object key (counter) decides state structure.

It has NOTHING to do with slice name.

You can write:

    const store = configureStore({
    reducer: { myCustomName: counterSlice.reducer },
    });

And your state becomes:

    state.myCustomName.counter
*/
//----------------------------------------------------
/*
Example:

If you use:

reducer: { counter: counterSlice.reducer }

State looks like:

{
  counter: {
    counter: 0,
    showCounter: true
  }
}

So in component:

const counter = useSelector(state => state.counter.counter);

// notice that during using the redux state in the main code we still use same hook "useSelector"
// but the wait we use it slightly change, look that after state we use counter (name of reducer used while configerStore not when creating createSlice )
and then state actual object 
*/
