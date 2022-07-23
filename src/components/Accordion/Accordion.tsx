import React from "react";
import AccordionTitle from './AccordionTitle/AccordionTitle'
import AccordionBody from "./AccordionBody/AccordionBody";

export type AccordionPropsType = {
    titleValue: string
    accordion: boolean
    /**
     * Function changed accordion on the true or false
     */
    setAccordion: () => void
}

export const Accordion:React.FC<AccordionPropsType> = ({titleValue,accordion,setAccordion}) =>  {
    return <div>
        <AccordionTitle title={titleValue} setAccordion={setAccordion}/>
        {accordion && <AccordionBody/>}
    </div>


}

export default Accordion