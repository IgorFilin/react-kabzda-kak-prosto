

type AccordionTitlePropsTitle = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsTitle) {

    return (<div><h1>{props.title}</h1></div>)
}

export default AccordionTitle