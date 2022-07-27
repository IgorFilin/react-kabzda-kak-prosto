import React, {useState} from 'react';
import {ItemsType} from "../Accordion/Accordion";
import s from './MySelected.module.css'

type MySelectedPropsType = {
    itemsName:string
    items: ItemsType[]
    callback?: (id: string) => void
}

export const MySelected = (props: MySelectedPropsType) => {
    const [collapsed, setCollapsed] = useState(false)
    const [title, setTitle] = useState(props.itemsName)

    const Collapsed = () => {
        setCollapsed(!collapsed)
    }
    const onClickItemsHahdler = (id: string) => {
        props.callback && props.callback(id)
        const newTitle = props.items.find(el => el.id === id)
        if(newTitle)
            setTitle(newTitle.title)
    }
    const notCollapsed = () => {
        setCollapsed(false)
    }



    return (
        <div onBlur={notCollapsed} tabIndex={0}  className={s.mySelected}>
            <div  className={s.title} onClick={Collapsed} >{title}<span className={s.wrapper}></span></div>

            {collapsed && props.items.map(el => <div onClick={() => onClickItemsHahdler(el.id)} className={title === el.title ? s.itemActive:s.items} key={el.id}>{el.title}</div>)}
        </div>
    );
};

