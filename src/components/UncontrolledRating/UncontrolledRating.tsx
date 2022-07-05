import {UncontrolledStar} from './UncontrolledStar/UncontrolledStar'
import {useState} from "react";



type RatingPropsType = {

}



export function UncontrolledRating(props: RatingPropsType) {

    let [value,setValue]= useState(4)

    const changeRating = (count:number) => {
        setValue(count)
    }


    return <div>
        <UncontrolledStar selected={value > 0}  changeRating={()=>changeRating(1)}/>
        <UncontrolledStar selected={value > 1}  changeRating={()=>changeRating(2)}/>
        <UncontrolledStar selected={value > 2}  changeRating={()=>changeRating(3)}/>
        <UncontrolledStar selected={value > 3}  changeRating={()=>changeRating(4)}/>
        <UncontrolledStar selected={value > 4}  changeRating={()=>changeRating(5)}/>
        </div>
}



