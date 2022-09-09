import React, {useCallback, useMemo, useState} from 'react';




const UseStateExample = () => {
    console.log('render UseStateExample')

    const  generateDate = () => {
        console.log('render generateDate')
        return 5
    }
    // const initialState = useMemo(generateDate,[])
// const initialState = generateDate() // передавая инишел стейт в юз стейт так, у нас функция будет вызыватся при каждом рендоре компоненты


    const [counter,setCounter]= useState(generateDate)// передавая вызов функцию в юз стейт мы перестаем её вызывать при каждом вызове компонента

    const countChanged = (stateCount:number) => {
        console.log('render countChanged')
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