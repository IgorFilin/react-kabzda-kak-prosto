import React, {useState} from "react";


type StarPropsType = {}


export function UncontrolledStar(props: StarPropsType) {

    let styleStarOn = {
        fontWeight: 700,
        cursor: "pointer"
    }
    let styleStarOff = {
        cursor: "pointer"
    }

    let [filterStar, setFilterStar] = useState(false)

    const onClickHandler = () => {
        setFilterStar(!filterStar)
    }

    return <span onClick={() => onClickHandler()} style={filterStar ? styleStarOn : styleStarOff}>STAR </span>
}
