import React, {useEffect, useState} from 'react';
import {AnalogClock} from "./AnalogClock/AnalogClock";
import {clockModeType} from "../../App";
import {DigitalClock} from "./DigitalClock/DigitalClock";


export type ClockTypeProps = {
    clockMode:clockModeType
}

export const Clock = (props:ClockTypeProps) => {
    const [hour, setHour] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    const analogMode = props.clockMode === 'ANALOG-CLOCK'
    const digitalMode = props.clockMode === 'DIGITAL-CLOCK'

    function getZero(num:number){
        if (num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num.toString();
        }
    }
    useEffect(() => {
        let id:any;
        if(analogMode){
            id = setInterval(() => {
                console.log('tic analog')
            let date = new Date();
            let hh = date.getHours() * 30,
                mm = date.getMinutes() * 6,
                ss = date.getSeconds() * 6;
            setHour(`rotateZ(${hh + mm / 12}deg)`);  // поворот на количество градусов
            setMinutes(`rotateZ(${mm}deg)`);
            setSeconds(`rotateZ(${ss}deg)`);
        }, 1000)
        }else if (digitalMode){
            id = setInterval(()=> {
                console.log('tic digital')
            let date = new Date()
                let hour = date.getHours();
                let minutes = date.getMinutes();
                let seconds = date.getSeconds()
                setHour(getZero(hour));
                setMinutes(getZero(minutes));
                setSeconds(getZero(seconds));
            },1000)
        }
        return () => {
            clearTimeout(id)
            setHour('00')
            setMinutes('00')
            setSeconds('00')
        }// метод жизненного цикла размонтирование, убивает конпоненту и все её макро микро таски окончательно
    }, [analogMode,digitalMode])


    return (<>
        {analogMode ? <AnalogClock hour={hour} minutes={minutes} seconds={seconds}/> : <DigitalClock hour={hour} minutes={minutes} seconds={seconds}/>}
        </>
);
};



