import react from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {incrementCounter, decrementCounter, incrementfive , decrementfive }  from '../src/reduxState/Action'


function ComponentRedux(){

    let countvalue = useSelector((state) => {
        console.log('state====',state)
        if(state &&  state.Reducer && state.Reducer.count )
        return  state.Reducer.count
        else return 0
    })

    let  usercount = useSelector((state) => {
        console.log('state====',state)
        if(state && state.Reducer2 && state.Reducer2.usercount)
        return state.Reducer2.usercount
        else return 0
    })

    let dispatch = useDispatch();

    const increment =()=>{
        dispatch(incrementCounter())
    }
    const decrement =()=>{
        dispatch(decrementCounter())
    }

    const incrementvalue =()=>{
        dispatch(incrementfive())
    }
    const decrementvalue =()=>{
        dispatch(decrementfive())
    }

    return(
        <div>
<h1> Counter Added</h1>
<h2> {countvalue}</h2>
<button onClick={increment}> Increment </button>
<button onClick={decrement}> Decrement </button>

<br/>
 
<h2> {usercount}</h2>

<button onClick={incrementvalue}> Increment </button>
<button onClick={decrementvalue}> Decrement </button> 

    </div>
    )
}

export default ComponentRedux;