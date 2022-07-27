import React, {ChangeEvent, useState} from "react";

export const ControledInputCheckbox = () => {
    const [value, setValue] = useState<boolean>(false)
    console.log(value)
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        setValue(e.currentTarget.checked)
    }

    return (
        <input type={'checkbox'} checked={value} onChange={onChangeHandler}/>
    )
}