import React, {useEffect, useState} from 'react';

export const ExampleUseEffectClearFn = () => {
    const [counter,setCounter] = useState(0)
    console.log('render ExampleUseEffectClearFn')

    useEffect(()=>{
        console.log('Set new value:' + counter)
        return () => {
            console.log('Clear value:' + counter)
        }
    },[counter])

    const onClickHandler = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <div>{counter}</div>
            <button onClick={onClickHandler}>+</button>
            </div>
    );
};

