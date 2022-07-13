import React from "react";


type AccordionTitlePropsTitle = {
    title: string
    setAccordion:(b:boolean)=> void
    open:boolean
}

const  AccordionTitle:React.FC<AccordionTitlePropsTitle>  = ({title,setAccordion,open}) =>  {

  const  onClickAccordionHandler = () => {

      setAccordion(!open)

    }

    return (<div  onClick={onClickAccordionHandler}><h1>{title}</h1></div>)
}

export default AccordionTitle