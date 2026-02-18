import { useState } from "react";
import CounterConfig from "./components/Counter/CounterConfig.jsx";
import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";

function App() {
    log("<App /> rendered");
    const [chosenCount, setChosenCount] = useState(0);

    function handleSetCount(newEnter) {
        setChosenCount(newEnter);
        // state updates are sheduled not imeediatly change the state by react
    }

    return (
        <>
            <Header />
            <main>
                <CounterConfig onSet={handleSetCount} />
                <Counter key={chosenCount} initialCount={chosenCount} />
                {/* both counter will have their diffrent instance in memory and of course both will have independent state, and that's what component make resuable in react */}
                <Counter initialCount={0} />
            </main>
        </>
    );
}

export default App;
