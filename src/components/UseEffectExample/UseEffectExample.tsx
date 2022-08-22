import React, {useEffect, useState} from 'react';

export const UseEffectExample = () => {

    console.log('rerender component UseEffectExample')
    const [count,setCount]= useState(1)
    const [fake,fakeCount] = useState(1)
    const [date,setData]=useState(new Date())

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

    // useEffect(()=>{
    //     let timerID = setInterval(()=>{
    //         setCount((state)=> state + 1)//передавай функцию внутрь сетСтейт он не лезет в замыкание и не находит count там,а использует всегда инициализационное значение
    //     },1000)
    // },[])

    function changeCount(state:number){
        return state + 1
    }


    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()


    const getZero = (number:number) => {
        if(number >= 0 && number < 10){
            return '0' + number
        }else {
            return number
        }
    }
    const time = getZero(hours)+':'+getZero(minutes)+':'+getZero(seconds)

    useEffect(()=>{
        setInterval(()=>{
            setData(new Date())
        },1000)
    },[])
    return (
        <div>
            <div style={{display:'flex',justifyContent:'center',fontSize:'40px'}}>{time}</div>
            {/*<button onClick={()=>setCount(changeCount)}>Count</button>*/}
            {/*<button onClick={()=>fakeCount(changeCount)}>Count</button>*/}
            {/*{count}*/}
        </div>
    );
};

