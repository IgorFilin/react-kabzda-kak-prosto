import classes from './OnOff.module.css'


type OnOffTypeProps = {
    value:boolean
}

function OnOff (props:OnOffTypeProps){




    return(
        <div className={classes.content}>
            {props.value && <div className={classes.activOn}>On</div>}
            {!props.value && <div className={classes.on}>On</div>}
            {!props.value && <div className={classes.activOff}>Off</div>}
            {props.value && <div className={classes.off}>Off</div>}
            {props.value && <div className={classes.activeSignal}></div>}
            {!props.value && <div className={classes.signal}></div>}
        </div>
    )
}

export default OnOff