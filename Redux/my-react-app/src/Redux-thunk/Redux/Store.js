import {createStore,applyMiddleware} from "redux"
import reducer from "./loginReducer"
// import thunk from "redux-thunk"

const thunk = store => next => action =>{
    typeof (action) == "function" ?
    action(store.dispatch):
    next(action)
}

export const store = createStore(reducer, applyMiddleware(thunk))