import {hover} from "@testing-library/user-event/dist/hover";
import {inspect} from "util";


type AccordionTitlePropsTitle = {
    title: string
    callback: () => void

}

function UncontrolledAccordionTitle(props: AccordionTitlePropsTitle) {

    let styleMenu = {
        color: 'red',
        cursor: "pointer"
    }

    const onClickHandler = () => {
        props.callback()

    }

    return (<div onClick={onClickHandler} style={styleMenu}><h1>{props.title}</h1></div>)
}

export default UncontrolledAccordionTitle