import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'

export const Clock = () => {
    const [hour, setHour] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");


    const clock = () => {
        let date = new Date();

        let hh = date.getHours() * 30,
            mm = date.getMinutes() * 6,
            ss = date.getSeconds() * 6;

        setHour(`rotateZ(${hh + mm / 12}deg)`);
        setMinutes(`rotateZ(${mm}deg)`);
        setSeconds(`rotateZ(${ss}deg)`);
    };

    setInterval(clock, 1000);




    return (
        <div className={s.content}>
            <div className={s.clock}>
                <div className={s.hour} style={{ transform: hour }}>
                    <div className={s.hr} ></div>
                </div>
                <div className={s.min} style={{ transform: minutes }}>
                    <div className={s.mn}></div>
                </div>
                <div className={s.sec}  style={{ transform: seconds }}>
                    <div className={s.sc}></div>
                </div>
            </div>
        </div>
    );
};
