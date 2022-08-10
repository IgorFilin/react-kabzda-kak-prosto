import React from "react";
import AccordionTitle from './AccordionTitle/AccordionTitle'
import AccordionBody from "./AccordionBody/AccordionBody";

export type ItemsType = {
    id:string
    title:string
}

export type AccordionPropsType = {
    titleValue: string
    accordion: boolean
    setAccordion: () => void
    items:ItemsType[]
}

export const Accordion:React.FC<AccordionPropsType> = React.memo(({titleValue,accordion,setAccordion,items}) =>  {

    const onClickItem = (id:string) => {
        alert(`User id is ${id}`)
    }

    return <div>
        <AccordionTitle title={titleValue} setAccordion={setAccordion}/>
        {accordion && <AccordionBody items={items} callback={onClickItem}/>}
    </div>


})

export default Accordion