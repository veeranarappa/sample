import {INCREMENT,DECREMENT} from './Actiontypes'

let initailState = {count : 0}

export const Reducer = (state = initailState, action) =>{
    switch(action.type){
        case INCREMENT:
            state ={
                ...state,
                count : state.count + 1
            }
            break;

            case DECREMENT:
                state ={
                    ...state,
                    count : state.count - 1
                }
            break;
    }

    return state
}