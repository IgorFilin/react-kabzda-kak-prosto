import React, {ChangeEvent, useRef, useState} from 'react';
import classes from './App.module.css';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {PageTitle} from "./components/PageTitle/PageTitle";

export type TypeFilter = false | true

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    const [rating, setRating] = useState<RatingType>(0)
    const [accordion, setAccordion] = useState<boolean>(false)
    const [filtered, setFiltered] = useState(false)


    return (
        <div className={classes.content}>
            <PageTitle title={'This is App'}/>
            <PageTitle title={'My friends'}/>
            <Accordion titleValue={'Menu'} setAccordion={() => setAccordion(!accordion)} accordion={accordion}/>
            <Accordion titleValue={'Friends'} setAccordion={() => setAccordion(!accordion)} accordion={accordion}/>
            <Rating value={rating} setRating={setRating}/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating/>
            <Accordion titleValue={'TITLE'} setAccordion={() => setAccordion(!accordion)} accordion={accordion}/>
            <OnOff filtered={filtered} setFiltered={setFiltered}/>
            <UncontrolledOnOff onChange={setFiltered}/>
            <InputControlledValue/>
            <div><InputControlledValueRef/></div>
        </div>

    );
}


export default App;


export const InputControlledValue = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onClickHandler = () =>{
        setValue('')
    }

    return (<><input value={value} onChange={onChangeHandler}/><button onClick={onClickHandler}>clear</button>value : {value}</>)

}
export const InputControlledValueRef = () => {

    const [value, setValue] = useState('')
    const valueInputRef = useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
       let el = valueInputRef.current as HTMLInputElement
        setValue(el.value)

    }


    return (<><input ref={valueInputRef}/>
        <button onClick={onClickHandler}>Add</button>
        value : {value}</>)

}