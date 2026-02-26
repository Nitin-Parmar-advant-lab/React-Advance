import classes from "./Counter.module.css";
// this useSelector is custom hook made by React Redux team.
import { useSelector, useDispatch } from "react-redux";

import { counterAction } from "../store/counter.js";

/*
useSelector:

- useSelector is a hook that reads a specific slice of state from the Redux store.
- You pass a selector function to it (like state => state.counter), and it returns the value of the state you're interested in.
- useSelector subscribes to the store and will trigger a re-render whenever the state you're selecting changes.

useStore:

- useStore is a hook that gives you access to the entire Redux store.
- It returns the store itself, not a specific slice of the state. With useStore, you can access the full state and dispatch methods, but it won't automatically re-render your component on state changes.
- useStore is more useful if you want to perform custom logic or dispatch actions manually.

*/
const Counter = () => {
    const dispatch = useDispatch();

    // this hook will automaticlly create subscription to the redux store by react redux library, so the compnenet get updated whenever value changes in the store
    const counter = useSelector((state) => state.counter.counter);
    const showCounter = useSelector((xyz) => xyz.counter.showCoutnter);
    // in above that state is plaholder and it can be anything like this:
    // (xyz => xyz.counter)
    // we must have to follow the store strucutre, then whatever naming you use

    const incrementHandler = () => {
        dispatch(counterAction.increment());
    };
    const decrementHandler = () => {
        dispatch(counterAction.decrement());
    };
    const increaseHanlder = () => {
        dispatch(counterAction.increase(5)); 
        //{type: SOME_UNIQUE-IDENTIFIER, payload: 10 }
        // this payload is in build keyword and can't be diffrent so in the store for accessint value we have to use payload keyword only 
    };

    // inshort this dispatch will take object and all things that object has will be passed into action to the reducserFucntion and by that action we can get this passed information
    // Like in about example we set object properied type and amount and it can be anything

    const toggleCounterHandler = () => {
        dispatch(counterAction.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={increaseHanlder}>Increase by 5</button>
                <button onClick={incrementHandler}>Increment</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;


