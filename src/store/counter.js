import { createSlice } from "@reduxjs/toolkit";

const initCounterState = { counter: 0, showCoutnter: true };


// createSlice take object, and in that every slice need name, identifiter of that piece of state
const counterSlice = createSlice({
    name: "counter",
    initialState: initCounterState, // or if over object name was same as the object require then we can write just initialState only so it would be like initialState = initialState, but here in my case it is note
    reducers: {
        // in this reducers, we declare all the method that we want from this reducer
        // and in this every method will get the latest state object
        increment(state) {
            state.counter++;
            // if we user react toolkit and creteSlice then we can write mutable code, because under the hood tool kit rewrite the object properites that are change and keep other as it is and pass it here if not changed or declared
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCoutnter = !state.showCoutnter;
        },
    },
});

// reducer without toolkit
const counterReducer = (state = initCounterState, action) => {
    if (action.type === "increment") {
        // IMP:
        // this reducer function returned object will be rewrite/overwrite old object state,
        // mean it does not change specific part it change the whole object in state
        // so maintaing old state also we have to write all properited as it was like this way
        // showCoutnter: state.showCoutnter,

        // so in working with redux, never mutate(change) the existing state
        // alway override it by returning a brand new state object
        return {
            counter: state.counter + 1,
            showCoutnter: state.showCoutnter,
        };
    }

    if (action.type === "increase") {
        return {
            counter: state.counter + action.amount,
            showCoutnter: state.showCoutnter,
        };
    }

    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
            showCoutnter: state.showCoutnter,
        };
    }

    if (action.type === "toggal") {
        return {
            showCoutnter: !state.showCoutnter,
            counter: state.counter,
        };
    }

    return state;
};

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;