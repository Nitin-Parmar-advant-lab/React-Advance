import { createStore } from "redux";


const initState = { counter: 0, showCoutnter: true };

const counterReducer = (state = initState, action) => {
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

const store = createStore(counterReducer);

export default store;
