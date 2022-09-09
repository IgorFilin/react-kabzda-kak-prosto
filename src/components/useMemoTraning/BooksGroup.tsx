import React, {useCallback, useMemo, useState} from "react";

export const BooksGroup = React.memo(() => {
    console.log('render BooksGroup')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    // const addBook = () => {
    //     setBooks([...books, 'Angular'])
    // }

    // const incrementCounter = () => {
    //     setCounter(counter + 1)
    // }

    const addBookMemo = useMemo(() => {
        return () => setBooks([...books, 'Angular'])
    }, [books])

    // const incrementCounterMemo = useMemo(() => {
    //     return () =>  setCounter(counter + 1)
    // },[counter])

    const incrementCounterMemo = useCallback(()=> setCounter(counter + 1),[counter])

    return <>
        <Counter count={counter} incrementCounter={incrementCounterMemo}/>
        <Book books={books} addBook={addBookMemo}/>
    </>
})


const Counter = React.memo((props: { count: number, incrementCounter: () => void }) => {
    console.log('Render Counter')

    const CounterIncrementHandler = () => {
        props.incrementCounter()
    }

    return <div>
        <button onClick={CounterIncrementHandler}>+</button>
        {props.count}
    </div>
})

const Book = React.memo((props: { books: Array<string>, addBook: () => void }) => {
    console.log('render Book')
    const addUserHandler = () => {
        props.addBook()
    }
    return <div>
        <button onClick={addUserHandler}>add book</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
})


