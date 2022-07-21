import {INCREMENTFIVE,DECREMENTFIVE} from './Actiontypes'

let arr=[{name:"veer"},{name:"veer1"},{name:"veer1"} ]

let initailState = {usercount : 0, usersdata:arr}



export const Reducer2 = (state = initailState, action) =>{
    switch(action.type){
        case INCREMENTFIVE:
            state ={
                ...state,
                usercount : state.usercount + 5,
                usersdata :[...state.usersdata, action.payload]
            }
            break;

            case DECREMENTFIVE:
                state ={
                    ...state,
                    usercount : state.usercount - 5
                }
                break;
    }

    return state
}