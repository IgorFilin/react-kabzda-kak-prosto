import React from "react";
import {RatingType} from "../../../App";


type StarPropsType = {
    selected: boolean
    setRating:(el:RatingType)=> void
    value:RatingType
}


export const Star:React.FC<StarPropsType> = ({selected,setRating,value}) => {

    const onClickHandler = () => {
        setRating(value)
    }

    return <span onClick={onClickHandler} >{selected ? <b>star </b> : 'star '}</span>
}

