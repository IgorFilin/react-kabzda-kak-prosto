import {UncontrolledStar} from './UncontrolledStar/UncontrolledStar'
import {useState} from "react";



type RatingPropsType = {

}



export function UncontrolledRating(props: RatingPropsType) {

    let [value,setValue]= useState(0)




    return <div>
        <UncontrolledStar selected={value > 0} setValue={setValue} value={1}/>
        <UncontrolledStar selected={value > 1} setValue={setValue} value={2}/>
        <UncontrolledStar selected={value > 2} setValue={setValue} value={3}/>
        <UncontrolledStar selected={value > 3} setValue={setValue} value={4}/>
        <UncontrolledStar selected={value > 4} setValue={setValue} value={5}/>
        </div>
}



