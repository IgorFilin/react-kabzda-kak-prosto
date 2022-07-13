import React from "react";


type StarPropsType = {
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
    value: 1 | 2 | 3 | 4 | 5
}
let styleStarOn = {
    fontWeight: 700,
    cursor: "pointer"
}
let styleStarOff = {
    cursor: "pointer"
}


export const UncontrolledStar: React.FC<StarPropsType> = ({setValue, value,selected}) => {
    let onClickHandler = () => {
        setValue(value)
    }


    return <span onClick={onClickHandler} style={selected ? styleStarOn : styleStarOff}>STAR </span>
}



