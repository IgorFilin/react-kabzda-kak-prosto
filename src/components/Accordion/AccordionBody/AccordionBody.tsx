import React from "react";
import {ItemsType} from "../Accordion";

export type AccordionBodYType = {
    items:ItemsType[]
    callback:(id:string)=>void
}

function AccordionBody(props:AccordionBodYType) {

    const onClickHandler = (id:string) => {
        props.callback(id)
    }

    return (
        <div>{props.items.map(el=> <li onClick={()=>onClickHandler(el.id)} key={el.id} >{el.title}</li>)}</div>
    )
}

export default AccordionBody