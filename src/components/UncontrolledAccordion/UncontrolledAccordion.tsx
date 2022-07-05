import React, {useState} from "react";
import UncontrolledAccordionBody from "./UncontrolledAccordionBody/UncontrolledAccordionBody";
import UncontrolledAccordionTitle from "./UncontrolledAccordionTitle/UncontrolledAccordionTitle";

type AccordionPropsType = {
    titleValue: string

}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [filter, setFilter] = useState(false)

    const ToggleAccordion = () => {
        setFilter(!filter)
    }


    return <div>
        <UncontrolledAccordionTitle title={props.titleValue} callback={() => ToggleAccordion()}/>
        {filter && <UncontrolledAccordionBody/>}
    </div>


}

export default UncontrolledAccordion