import React from "react";


type StarPropsType = {
    selected: boolean
    changeRating: () => void
}
let styleStarOn = {
    fontWeight: 700,
    cursor: "pointer"
}
let styleStarOff = {
    cursor: "pointer"
}




export function UncontrolledStar(props: StarPropsType) {
    let onClickHandler = () => {
        props.changeRating()
    }



    return <span onClick={onClickHandler} style={props.selected ? styleStarOn : styleStarOff}>STAR </span>
}



