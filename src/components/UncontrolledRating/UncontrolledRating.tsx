import React from "react";
import {UncontrolledStar} from './UncontrolledStar/UncontrolledStar'


type RatingPropsType = {

}



export function UncontrolledRating(props: RatingPropsType) {

    return <div>
        <UncontrolledStar />
        <UncontrolledStar />
        <UncontrolledStar />
        <UncontrolledStar />
        <UncontrolledStar />
    </div>

}


