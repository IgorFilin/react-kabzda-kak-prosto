import React from "react";
import s from "../Clock.module.css";

export type AnalogClockTypeProps = {
    hour: string
    minutes: string
    seconds: string
}
export const AnalogClock = React.memo(({hour, minutes, seconds}: AnalogClockTypeProps) => {
    return (
        <div className={s.content}>
            <div className={s.clock}>
                <div className={s.hour} style={{transform: hour}}>
                    <div className={s.hr}></div>
                </div>
                <div className={s.min} style={{transform: minutes}}>
                    <div className={s.mn}></div>
                </div>
                <div className={s.sec} style={{transform: seconds}}>
                    <div className={s.sc}></div>
                </div>
            </div>
        </div>
    )
})