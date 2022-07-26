import React, {useRef, useState} from "react";

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