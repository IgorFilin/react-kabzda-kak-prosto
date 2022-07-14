import classes from './UncontrolledOnOff.module.css'
import React, {useState} from "react";

type FilterTypeOnOff = true | false

type UncontrolledOnOffTypeProps = {
    onChange:(b:boolean)=> void
}

export const UncontrolledOnOff:React.FC<UncontrolledOnOffTypeProps> = ({onChange}) =>  {
   let [filter,setFilter] = useState<FilterTypeOnOff>(false)


 const onClickHandlerOn = () => {
     setFilter(true)
     onChange(true)

 }
    const onClickHandlerOff = () => {
        setFilter(false)
        onChange(false)
    }


    return (
        <div className={classes.content}>
            {<div onClick={onClickHandlerOn}  className = {(filter) ? classes.activOn: classes.on}>On</div>}
            {<div onClick={onClickHandlerOff} className = {(filter) ? classes.off : classes.activOff}>Off</div>}
            {<div className = {(filter) ? classes.activeSignal: classes.signal}></div>}
        </div>
    )
}

export default UncontrolledOnOff