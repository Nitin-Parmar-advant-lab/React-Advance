import { useRef, useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
    const lastChange = useRef();
    const [searchTerm, setSearchTerm] = useState("");

    const searchResults = items.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // this is called debouncing 
    // that mean very keystroke does not search but after some time (trashload time) it will search
    function handleChange(e) {
        if (lastChange.current) {
            clearTimeout(lastChange.current);
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            setSearchTerm(e.target.value);
        }, 500);
    }

    return (
        <div className="searchable-list">
            <input type="search" placeholder="Search" onChange={handleChange} />
            <ul>
                {searchResults.map((item) => (
                    <li key={itemKeyFn(item)}>{children(item)}</li>
                ))}
            </ul>
        </div>
    );
}
