import React from "react";
import AccordionTitle from './AccordionTitle/AccordionTitle'
import AccordionBody from "./AccordionBody/AccordionBody";

type AccordionPropsType = {
    titleValue: string
    open: boolean
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue}/>
        { props.open && <AccordionBody/>}
    </div>


}

export default Accordion