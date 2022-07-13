import React from "react";
import {Star} from './Star/Star'
import {RatingType} from "../../App";


type RatingPropsType = {
    value: number
    setRating:(el:RatingType)=> void
}



export function Rating(props: RatingPropsType) {

    return <div>
        <Star selected={props.value > 0} setRating={props.setRating} value={1}/>
        <Star selected={props.value > 1} setRating={props.setRating} value={2}/>
        <Star selected={props.value > 2} setRating={props.setRating} value={3}/>
        <Star selected={props.value > 3} setRating={props.setRating} value={4}/>
        <Star selected={props.value > 4} setRating={props.setRating} value={5}/>
    </div>

}


