import { createContext, useContext, useState } from "react";
import {AccordionItem} from "./AccordionItem.jsx";
import AccordionTitle from "./AccordionTitle.jsx";
import AccordionContent from "./AccordionContent.jsx";

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);

    if (!ctx) {
        throw new Error(
            "Accordion-realated components must be wrapped by <Accordion>.",
        );
    }
    return ctx;
}

export default function Accordion({ children, className }) {
    const [openItemId, setOpenItemId] = useState();

    function taggleItem(id) {
        setOpenItemId((prevId) => (prevId === id ? null : id));
    }

    // function openItem(id) {
    //     setOpenItemId(id);
    // }
    // function closeItem(id) {
    //     setOpenItemId(null);
    // }

    const contextValue = {
        openItemId,
        taggleItem,
    };

    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>{children}</ul>
        </AccordionContext.Provider>
    );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
