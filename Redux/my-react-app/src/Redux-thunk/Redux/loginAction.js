import {FETCH_USERS_FAILURE,FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS} from "./ActionType"
import axios from "axios"

export const fetchUserSuccess = payload =>({
    type: FETCH_USERS_SUCCESS,
    payload
})

export const fetchUserRequest = payload =>({
    type: FETCH_USERS_REQUEST,
    payload
})

export const fetchUserFailure = payload =>({
    type: FETCH_USERS_FAILURE,
    payload
})

export const fetchUserData = payload => dispatch => {
    dispatch(fetchUserRequest())
    console.log(payload)
    return axios.post("https://masai-api-mocker.herokuapp.com/auth/login",{       
        username:payload.uname,
        password:payload.pass
    })
    .then(res=>res.data)
    .then(res=>dispatch(fetchUserSuccess(res)))
    .catch(err=>dispatch(fetchUserFailure(err)))
}