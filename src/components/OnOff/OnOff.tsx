import classes from './OnOff.module.css'
import React from "react";


type OnOffTypeProps = {
    filtered: boolean
    setFiltered: (b: boolean) => void
}

export const OnOff = React.memo((props: OnOffTypeProps) => {


    const onClickHandler = (b: boolean) => {
        props.setFiltered(b)
    }


    return (
        <div className={classes.content}>
            {<div onClick={() => onClickHandler(true)}
                  className={(props.filtered) ? classes.activOn : classes.on}>On</div>}
            {<div onClick={() => onClickHandler(false)}
                  className={(props.filtered) ? classes.off : classes.activOff}>Off</div>}
            {<div className={(props.filtered) ? classes.activeSignal : classes.signal}></div>}
        </div>
    )
}
)

