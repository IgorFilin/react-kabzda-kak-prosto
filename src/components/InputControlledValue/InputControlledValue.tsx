import React, {ChangeEvent, useState} from "react";

export const InputControlledValue = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onClickHandler = () => {
        setValue('')
    }

    return (<><input value={value} onChange={onChangeHandler}/>
        <button onClick={onClickHandler}>clear</button>
        value : {value}</>)

}