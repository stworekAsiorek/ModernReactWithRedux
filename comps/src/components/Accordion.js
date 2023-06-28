import { useState } from "react";
import Section from "./Section";

function Accordion({items}){

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const renderedItems = items.map((item, index) => {
        return <Section key={item.id} index={index} item={item} isExpanded={expandedIndex === index} onClick={() => setExpandedIndex(currentExpandedIndex => index === currentExpandedIndex ? -1 : index)}/>
    })

    return (
    <div className="border-x border-t rounded">
        {renderedItems}
    </div>
    )
}

export default Accordion;