import {INCREMENTFIVE,DECREMENTFIVE} from './Actiontypes'

let initailState = {usercount : 0}

export const Reducer2 = (state = initailState, action) =>{
    switch(action.type){
        case INCREMENTFIVE:
            state ={
                ...state,
                usercount : state.usercount + 5
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