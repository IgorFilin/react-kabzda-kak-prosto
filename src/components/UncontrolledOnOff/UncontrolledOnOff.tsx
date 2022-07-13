import classes from './UncontrolledOnOff.module.css'
import {useState} from "react";

type FilterTypeOnOff = true | false


function UncontrolledOnOff() {
   let [filter,setFilter] = useState<FilterTypeOnOff>(false)


 const onClickHandler = (str:FilterTypeOnOff) => {
     setFilter(str)
 }


    return (
        <div className={classes.content}>
            {<div onClick={() => onClickHandler(true)}  className = {(filter) ? classes.activOn: classes.on}>On</div>}
            {<div onClick={() => onClickHandler(false)} className = {(filter) ? classes.off : classes.activOff}>Off</div>}
            {<div className = {(filter) ? classes.activeSignal: classes.signal}></div>}
        </div>
    )
}

export default UncontrolledOnOff