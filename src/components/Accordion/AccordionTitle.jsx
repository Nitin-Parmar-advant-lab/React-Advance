import { useAccordionContext } from "./Accordion";
import useAccordionItemContext from "./AccordionItem";

export default function AccordionTitle({  className, children }) {
    const id = useAccordionItemContext()
    const { taggleItem } = useAccordionContext();
    return <h3 className={className} onClick={() => taggleItem(id)}>{children}</h3>;
}
