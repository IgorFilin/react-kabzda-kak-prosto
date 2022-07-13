import React, {useState} from 'react';
import classes from './App.module.css';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

type PageTitlePropsType = {
    title: string
}
export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    const [rating, setRating] = useState<RatingType>(0)
    const [accordion,setAccordion] = useState<boolean>(false)
    console.log(accordion)


    return (
        <div className={classes.content}>
            {/*<div><PageTitle title={'This is App'}/>*/}
            {/*    <PageTitle title={'My friends'}/>*/}
            {/*</div>*/}
            {/*Article 1*/}
            {/*<div>*/}
            {/*    <Accordion titleValue={'Menu'} open={true}/>*/}
            {/*    <Accordion titleValue={'Friends'} open={false}/>*/}
            {/*</div>*/}
            {/*Article 2*/}
            {/*<div>*/}
            {/*    <Rating value={rating} setRating={setRating}/>*/}

            {/*</div>*/}
            {/*<div>*/}
            {/*    <OnOff/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*</div>*/}
            {/*<div><UncontrolledRating/></div>*/}
            <Accordion titleValue={'TITLE'} open={accordion} setAccordion={setAccordion}/>
        </div>

    );
}

function PageTitle(props: PageTitlePropsType) {

    return <div><h1>{props.title}</h1></div>
}


export default App;
