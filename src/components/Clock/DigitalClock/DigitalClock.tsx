import React from "react";
import s from "./ClockDigital.module.css";


export type AnalogClockTypeProps = {
    hour: string
    minutes: string
    seconds: string
}
export const DigitalClock = React.memo(({hour, minutes, seconds}: AnalogClockTypeProps) => {
    return (
        <div className={s.content}>
         <div className={s.digitalClock}>{hour +':'+ minutes + ':'+seconds}</div>
        </div>
    )
})