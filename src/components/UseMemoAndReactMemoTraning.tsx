import React, {useMemo, useState} from "react";

const NewMessagesCounter = React.memo((props:{count:number}) => {
    console.log('Render count')
    return <div>{props.count}</div>
})
const UsersSecret = (props:{users:Array<string>}) => {
    console.log('Render users')
    return <div>{props.users.map((u,i) => <div key={i}>{u}</div> )}</div>
}
const UsersMemo = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('render HelpsToReactMemo')
    const [counter,setCounter]= useState(0)
    const [users,setUsers]= useState(['Igor','Vasya','Alisa','Artem'])

    const addUser = () => {
        setUsers([...users,'Sveta'])
    }

    let filteredUsers = useMemo(()=> users.filter(us => us.toLowerCase().includes('a')),[users] )


    return <>
        <button onClick={()=>setCounter(counter+1)} >+</button>
        <button onClick={addUser} >add user</button>
        <NewMessagesCounter count={counter}  />
        <UsersMemo users={filteredUsers}/>
    </>
}