import React, {useReducer} from "react";
import UncontrolledAccordionBody from "./UncontrolledAccordionBody/UncontrolledAccordionBody";
import UncontrolledAccordionTitle from "./UncontrolledAccordionTitle/UncontrolledAccordionTitle";
import {reducer} from "./Reducer";

type AccordionPropsType = {
    titleValue: string
}

export type StateType = {
    collapsed:boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [state, dispatch] = useReducer(reducer,{collapsed:false})




    return <div>
        <UncontrolledAccordionTitle title={props.titleValue} callback={()=>dispatch({type:'TOGGLE-VALUE'})}/>
        {state.collapsed && <UncontrolledAccordionBody/>}
    </div>


}

export default UncontrolledAccordion