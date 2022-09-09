import React, {useState} from 'react';
import classes from './App.module.css';
import Accordion from "./components/Accordion/Accordion";
import {MySelected} from "./components/MySelected/MySelected";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Example1} from "./components/useMemoTraning/ReactMemo";
import {UseMemoTraning} from "./components/useMemoTraning/UseMemoTraning";
import {HelpsToReactMemo} from "./components/useMemoTraning/UseMemoAndReactMemoTraning";
import {SelectedComponentsUseMemoTrannig} from "./SelectedComponentsUseMemoTrannig";
import {BooksGroup} from "./components/useMemoTraning/BooksGroup";
import UseStateExample from "./components/UseStateExample/UseStateExample";
import {Clock} from "./components/Clock/Clock";


export type TypeFilter = false | true

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

export type clockModeType = 'ANALOG-CLOCK' | "DIGITAL-CLOCK"

function App() {
    return (
        <div className={classes.content}>
            <Clock clockMode='ANALOG-CLOCK'/>
        </div>

    );
}


export default App;























//
// const [rating, setRating] = useState<RatingType>(0)
// const [accordion, setAccordion] = useState<boolean>(false)
// const [filtered, setFiltered] = useState(false)
// const [value, setValue] = useState<string>('2')
// const items = [{id: '1', title: 'Igor'}, {id: '2', title: 'Alisa'}, {id: '3', title: 'Vasya'}, {id: '4', title: 'Valera'}, {id: '5', title: 'Bob'}, {id: '6', title: 'Herry'}]