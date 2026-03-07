// import { useAccordionContext } from "./Accordion";

import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export default function useAccordionItemContext() {
    const ctx = useContext(AccordionItemContext)

    if (!ctx) {
        throw new Error('AccordionItem-related components must be wrapped by <Accordion.Item>')
    }

    return ctx;
}

export function AccordionItem({ id, className, children }) {
    // const { openItemId, taggleItem } = useAccordionContext();

    return (
        <AccordionItemContext.Provider value={id}>
            <li className={className}>{children}</li>
        </AccordionItemContext.Provider>
    );
}
