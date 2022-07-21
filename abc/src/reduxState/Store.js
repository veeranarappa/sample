
import {createStore , combineReducers} from 'redux'
import {Reducer} from './Reducer'
import {Reducer2} from './Reducer2'

const rootReducer = combineReducers(
    {
        Reducer : Reducer,
        Reducer2 : Reducer2
    }
)

let store = createStore(rootReducer);

// store.dispatch({
//     type: INCREMENT
// })

export default store;
