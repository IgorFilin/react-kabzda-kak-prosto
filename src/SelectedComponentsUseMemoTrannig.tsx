import React, {useState} from 'react';
import {MySelected} from "./components/MySelected/MySelected";
import {MySelectedForSelectedComponents} from "./components/MySelectForSelectedComponents";

type cityesType = {
    idCountry: string
    id: string
    title: string
}

export type ArrayCityesType = Array<cityesType>

export const SelectedComponentsUseMemoTrannig = () => {
    console.log('render SelectedComponentsUseMemoTrannig')
    const arrayCityes = [
        {idCountry: '1', id: '1', title: 'Moscow'},
        {idCountry: '1', id: '2', title: 'Tula'},
        {idCountry: '1', id: '3', title: 'Suvorov'},
        {idCountry: '2', id: '4', title: 'Brest'},
        {idCountry: '2', id: '5', title: 'Minsk'},
        {idCountry: '2', id: '6', title: 'Gomel'},
        {idCountry: '3', id: '7', title: 'Kiev'},
        {idCountry: '3', id: '8', title: 'Lwow'},
        {idCountry: '3', id: '9', title: 'Rovno'}
    ]
    const [value, setValue] = useState('2')
    const [value2, setValue2] = useState('3')
    const [value3, setValue3] = useState('7')
    const [counter, setCounter] = useState(0)

    const filteredIdOne = arrayCityes.filter(el => el.idCountry === '1')
    const filteredIdTwo = arrayCityes.filter(el => el.title.toLowerCase().includes('o'))
    const filteredIdThree = arrayCityes.filter(el => el.idCountry === '3')


    return (
        <div style={{display: "flex"}}>
            <MySelectedForSelectedComponents value={value} items={filteredIdOne} callback={setValue}/>
            <MySelectedForSelectedComponents value={value2} items={filteredIdTwo} callback={setValue2}/>
            <MySelectedForSelectedComponents value={value3} items={filteredIdThree} callback={setValue3}/>
              <Count counter={counter} setCounter={setCounter}/>
        </div>
    );
};

const Count = React.memo((props:any) => {
    console.log('render Count')
    return (
        <>
            <div>{props.counter}</div>
            <button onClick={() => props.setCounter(props.counter + 1)}>add</button>

        </>
    )
})