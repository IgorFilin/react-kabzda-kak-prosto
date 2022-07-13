import React from "react";
import AccordionTitle from './AccordionTitle/AccordionTitle'
import AccordionBody from "./AccordionBody/AccordionBody";

type AccordionPropsType = {
    titleValue: string
    open: boolean
    setAccordion:(b:boolean)=> void
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} open={props.open} setAccordion={props.setAccordion}/>
        { props.open && <AccordionBody/>}
    </div>


}

export default Accordion