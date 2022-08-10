import React, {ChangeEvent, useState} from "react";

export const ControledInputCheckbox = React.memo(()=> {
    const [value, setValue] = useState<boolean>(false)
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        setValue(e.currentTarget.checked)
    }

    return (
        <input type={'checkbox'} checked={value} onChange={onChangeHandler}/>
    )
})