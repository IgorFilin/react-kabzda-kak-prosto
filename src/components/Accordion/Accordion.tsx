import React from "react";
import AccordionTitle from './AccordionTitle/AccordionTitle'
import AccordionBody from "./AccordionBody/AccordionBody";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {

    if (props.collapsed) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    }

    return <div>
            <AccordionTitle title={props.titleValue}/>
        </div>


}

export default Accordion