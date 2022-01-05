import React,{useState} from 'react'

function Practice(){
    const [count, setCount] = useState(0);

    const [name, setName] = useState('veera')

    const incrementCounter = () =>{
        setCount((preState)=>{
                return  preState + 1;
        })
    }

    const decrementCounter = () =>{
        setCount((preState)=>{
                return  preState - 1;
        })
    }

    const changeName=()=>{
        setName('Mouni')
    }

    return(
        <div>
            <h1> {count}</h1>
            <button onClick={incrementCounter}> Click </button>
            <button onClick={decrementCounter}> Click </button>
            <h3> {name}</h3>
            <button onClick={changeName}> Click </button>
        </div>
    )
}

export default Practice;