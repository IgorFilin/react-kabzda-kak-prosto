import classes from './OnOff.module.css'
import React, {useState} from "react";


type OnOffTypeProps = {
    filter:boolean
    setFilter:(el:boolean) => void
}

const  OnOff:React.FC<OnOffTypeProps> = ({filter,setFilter}) =>  {



 const onClickHandler = (b:boolean) => {
     setFilter(b)
 }


    return (
        <div className={classes.content}>
            {<div onClick={() => onClickHandler(true)}  className = {(filter) ? classes.activOn: classes.on}>On</div>}
            {<div onClick={() => onClickHandler(false)} className = {(filter) ? classes.off : classes.activOff}>Off</div>}
            {<div className = {(filter) ? classes.activeSignal: classes.signal}></div>}
        </div>
    )
}

export default OnOff