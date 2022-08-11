import React, {useMemo, useState} from 'react';


export const UseMemoTraning = () => {
    console.log('render UseMemoTraning')
    const [a, setA] = useState(1)
    const [b, setB] = useState(1)

    let resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            console.log('for one')
            let fake = 0
            while (fake < 1000000000) {
                fake++
            }
            tempResult = tempResult * i
        }
        return tempResult
    }, [a])
    let resultB = 1

    for (let i = 1; i <= b; i++) {
        console.log('for two')
        resultB = resultB * i
    }


    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>Result a:{resultA}</div>
            <div>Result b:{resultB}</div>
        </div>
    );
};

