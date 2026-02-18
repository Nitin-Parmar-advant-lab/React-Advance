import { useState } from "react";

import { log } from "../../log.js";

function HistoryItem({ count }) {
    log("<HistoryItem /> rendered", 3);

    const [selected, setSelected] = useState(false);

    function handleClick() {
        setSelected((prevSelected) => !prevSelected);
    }

    return (
        <li onClick={handleClick} className={selected ? "selected" : undefined}>
            {count}
        </li>
    );
}

export default function CounterHistory({ history }) {
    log("<CounterHistory /> rendered", 2);

    return (
        <ol>
            {/* position of this component in the component tree, 
            react tracks state by component type and position and also key
            that is why we use key to track so that react can identify  that instace*/}
            {history.map((count) => (
                <HistoryItem key={count.id} count={count.value} />
            ))}
        </ol>
    );
}
