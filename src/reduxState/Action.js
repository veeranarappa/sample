
import {INCREMENT, DECREMENT, INCREMENTFIVE, DECREMENTFIVE} from './Actiontypes'

export const incrementCounter =()=>{
    return {
        type : INCREMENT
    }
}

export const decrementCounter =() => {
    return{
        type : DECREMENT
    }
}

export const incrementfive =()=>{
    return {
        type : INCREMENTFIVE
    }
}

export const decrementfive =() => {
    return{
        type : DECREMENTFIVE
    }
}