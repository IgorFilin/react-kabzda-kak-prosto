import React, {useState} from 'react';
import classes from './App.module.css';
import Accordion from "./components/Accordion/Accordion";
import {MySelected} from "./components/MySelected/MySelected";


export type TypeFilter = false | true

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    //
    // const [rating, setRating] = useState<RatingType>(0)
    // const [accordion, setAccordion] = useState<boolean>(false)
    // const [filtered, setFiltered] = useState(false)
    const items = [{id: '1', title: 'Igor'}, {id: '2', title: 'Alisa'}, {id: '3', title: 'Vasya'}, {id: '4',title: 'Valera'
    }, {id: '5', title: 'Bob'}, {id: '6', title: 'Herry'}]

    const testLogIdUser = (id:string) =>{
        console.log(id)
    }

    return (
        <div className={classes.content}>
            <MySelected itemsName={'users'} items={items} callback={testLogIdUser}/>
        </div>

    );
}


export default App;

