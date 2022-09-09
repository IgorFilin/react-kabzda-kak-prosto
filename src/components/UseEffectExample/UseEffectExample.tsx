import React, {useEffect, useLayoutEffect, useState} from 'react';

export const UseEffectExample = React.memo(() => {
    console.log('render UseEffectExample')
    const [date,setData]=useState(new Date())


    // function changeCount(state:number){
    //     return state + 1
    // }


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

   useEffect(()=> {
       let id = setInterval(()=>{
           console.log('tic')
           setData(new Date())
       },1000)
       return () => {
           console.log('clear')
         clearInterval(id)
       }
   },[])



    return (
        <div>
            <div style={{display:'flex',justifyContent:'center',fontSize:'40px'}}>{time}</div>
            {/*<button onClick={()=>setCount(changeCount)}>Count</button>*/}
            {/*<button onClick={()=>fakeCount(changeCount)}>Count</button>*/}
            {/*{count}*/}
        </div>
    );
});

