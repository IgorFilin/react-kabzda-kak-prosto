import React, {DetailedHTMLProps, HTMLAttributes, KeyboardEventHandler, useEffect, useState} from 'react';
import {ItemsType} from "../Accordion/Accordion";
import s from './MySelected.module.css'

type MySelectedPropsType = {
    value?: string
    items: ItemsType[]
    callback: (id: string) => void
}

export const MySelected = (props: MySelectedPropsType) => {
    const [collapsed, setCollapsed] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const selectItem = props.items.find(title => props.value === title.id)
    const hoveredItem = props.items.find(title => title.id === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])


    const collapsedOn = () => {
        setCollapsed(!collapsed)

    }
    const itemClicked = (id: string) => {
        props.callback(id)
        setCollapsed(!collapsed)

    }
    const HoveredItemOnMouseEnter = (id: string) => {
        setHoveredElementValue(id)
    }

    const onOffCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const onKeyHoverItem = (e: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].id === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.callback(pretendentElement.id)
                        return
                    }
                }
                if(!selectItem){
                    props.callback(props.items[0].id)

                }


            }


        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setCollapsed(!collapsed)
        }
    }


    return (
        <div onClick={onOffCollapsed} onKeyDown={onKeyHoverItem} tabIndex={0} className={s.mySelected}>
            <span className={s.title} onClick={collapsedOn}>{selectItem && selectItem.title}</span>
            <span className={s.wrapper}></span>
            {collapsed && props.items.map(el => <div onMouseEnter={() => HoveredItemOnMouseEnter(el.id)}
                                                     onClick={() => itemClicked(el.id)}
                                                     className={hoveredItem === el ? s.itemActive : s.items}
                                                     key={el.id}>{el.title}</div>)}
        </div>
    );
};

