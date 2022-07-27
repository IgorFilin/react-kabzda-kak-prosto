import React, {ChangeEvent, useState} from "react";

export const SelectedUsers = () => {
    const [value, setValue] = useState<string | undefined>(undefined)
    console.log(value)

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <select value={value} onChange={onChangeHandler}>
            <option>none</option>
            <option value={'id1'}>Igor</option>
            <option value={'id2'}>Vasya</option>
            <option value={'id3'}>Alina</option>
            <option value={'id4'}>Max</option>
            <option value={'id5'}>Valera</option>
        </select>
    )
}