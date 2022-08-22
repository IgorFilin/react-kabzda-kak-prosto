import React, {useEffect, useState} from 'react';
import {clearInterval} from "timers";

export const UseEffectExample = () => {

    console.log('rerender component UseEffectExample')
    const [count,setCount]=useState(1)

    useEffect(() => {
        console.log('rerender all time')
        // setInterval
        // setTimeout
        // document.title = 'blabla'
        // document.getElementById('blabla') это самые частые sideEffects - сторонний эффект, где то к примеру за пределами компонент
    })

    useEffect(()=>{
        console.log('Hello, im hook use Effect,im rerender only once')
    },[])

    useEffect(()=>{
        console.log('Hi,im rerender always changed count =__=')
        document.title = count.toString()
    },[count])


    function changeCount(state:number){
        return state + 1
    }

    return (
        <div>
            <button onClick={()=>setCount(changeCount)}>Count</button>
            {count}
        </div>
    );
};

