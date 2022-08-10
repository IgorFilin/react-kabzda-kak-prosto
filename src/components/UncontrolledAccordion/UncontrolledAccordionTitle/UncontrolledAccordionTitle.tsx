import React from "react";


type AccordionTitlePropsTitle = {
    title: string
    callback: () => void

}

export const  UncontrolledAccordionTitle = React.memo((props: AccordionTitlePropsTitle) => {

    let styleMenu = {
        color: 'red',
        cursor: "pointer"
    }

    const onClickHandler = () => {
        props.callback()

    }

    return (<div onClick={onClickHandler} style={styleMenu}><h1>{props.title}</h1></div>)
})

