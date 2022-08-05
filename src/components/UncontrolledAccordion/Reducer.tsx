import {StateType} from "./UncontrolledAccordion";

export type ActionType = {
    type: string
}

export const reducer = (state: StateType, action: ActionType):StateType => {
    debugger
    switch (action.type){
        case 'TOGGLE-VALUE':{
            return {...state,collapsed:!state.collapsed}
        }
        default:
            return state
    }

}