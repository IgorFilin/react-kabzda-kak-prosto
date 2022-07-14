import React from "react";
import AccordionTitle from './AccordionTitle/AccordionTitle'
import AccordionBody from "./AccordionBody/AccordionBody";

type AccordionPropsType = {
    titleValue: string
    accordion: boolean
    setAccordion: () => void
}

export const Accordion:React.FC<AccordionPropsType> = ({titleValue,accordion,setAccordion}) =>  {
    return <div>
        <AccordionTitle title={titleValue} setAccordion={setAccordion}/>
        {accordion && <AccordionBody/>}
    </div>


}

export default Accordion