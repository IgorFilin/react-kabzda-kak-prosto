import React from 'react';
import classes from './App.module.css';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

type PageTitlePropsType = {
    title: string
}


function App() {

    return (
        <div className={classes.content}>
            <div><PageTitle title={'This is App'}/>
                <PageTitle title={'My friends'}/>
            </div>
            Article 1
            <div><Rating value={1}/>
                <Accordion titleValue={'Menu'} open={true}/>
                <Accordion titleValue={'Friends'} open={false}/>
            </div>
            Article 2
            <div><Rating value={0}/>
                <Rating value={1}/>
                <Rating value={2}/>
                <Rating value={3}/>
                <Rating value={4}/>
                <Rating value={5}/>
            </div>
            <div>
                <OnOff/>
            </div>
            <div>
               <UncontrolledAccordion titleValue={'Menu'}/>
            </div>
            <div><UncontrolledRating/></div>
        </div>

    );
}

function PageTitle(props: PageTitlePropsType) {

    return <div><h1>{props.title}</h1></div>
}


export default App;
