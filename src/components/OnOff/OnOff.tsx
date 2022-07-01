import classes from './OnOff.module.css'


type OnOffTypeProps = {
    value: boolean
}

function OnOff(props: OnOffTypeProps) {




    return (
        <div className={classes.content}>
            {<div className = {(props.value) ? classes.activOn: classes.on}>On</div>}
            {<div className = {(props.value) ? classes.off : classes.activOff}>Off</div>}
            {<div className = {(props.value) ? classes.activeSignal: classes.signal}></div>}
        </div>
    )
}

export default OnOff