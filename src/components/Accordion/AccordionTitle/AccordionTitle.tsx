import React from "react";
import accordion from "../Accordion";


type AccordionTitlePropsTitle = {
    title: string
    setAccordion:()=> void

}

const  AccordionTitle:React.FC<AccordionTitlePropsTitle>  = React.memo(({title,setAccordion}) =>  {

    const  onClickAccordionHandler = () => {
        setAccordion()
    }

    return (<div  onClick={onClickAccordionHandler}><h1>{title}</h1></div>)
})

export default AccordionTitle