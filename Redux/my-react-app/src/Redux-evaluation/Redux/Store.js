import {createStore,applyMiddleware} from "redux"
// import thunk from "react-thunk"
import Reducer,{initState} from "./Reducer"
import { composeWithDevTools } from 'redux-devtools-extension';

const thunk = store => next => action => {
    typeof (action) == "function" ?
    action(store.dispatch):
        next(action)
}


export const store = createStore(Reducer,initState, composeWithDevTools(applyMiddleware(thunk)) )