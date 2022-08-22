import React, {useMemo, useState} from 'react';

const UseStateExample = () => {
    console.log('render UseStateExample')

    function initialResult () {
        console.log('render initialResult')
        return 5
    }
    // let initialCount = useMemo(initialResult,[])
    // let initialCount = useCallback(initialResult,[])
    const [counter,setCounter]= useState(initialResult)// передавая вызов функцию в юз стейт мы перестаем её вызывать при каждом вызове компонента

    const countChanged = (stateCount:number) => {
        return stateCount + 1
    }

    return (
        <div>
            <button onClick={()=> setCounter(countChanged)}>+</button>
            {counter}
        </div>
    );
};

export default UseStateExample;