import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    POST_USERS_SUCCESS,
    POST_USERS_FAILURE,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE   

} from "./ActionType";

import axios from "axios"


export const fetchUserRequest = payload => ({
    type: FETCH_USERS_REQUEST,
    payload
})

export const fetchUserSuccess = payload => ({
    type: FETCH_USERS_SUCCESS,
    payload
})

export const fetchUserFailure = payload => ({
    type: FETCH_USERS_FAILURE,
    payload
})

export const fetchUserData = payload => dispatch => {
    dispatch(fetchUserRequest())
    // console.log(payload)
     axios.post("https://masai-api-mocker.herokuapp.com/auth/login", { 
            username: payload.email,
            password: payload.pass
        })
        .then(res=>res.data)
        .then(res => dispatch(fetchUserSuccess(res)))
        .catch(err => dispatch(fetchUserFailure(err)))
}

export const postUserSuccess = payload => ({
    type: POST_USERS_SUCCESS,
    payload
})

 const postUserFailure = payload => ({
    type: POST_USERS_FAILURE,
    payload
})

export const postUserData = payload => dispatch =>{
    console.log(payload)
     axios.post("https://masai-api-mocker.herokuapp.com/auth/register", {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        username: payload.username,
        mobile: payload.mobile,
        description: payload.description,
    })
    .then(res=>res.data)
    .then(res=>dispatch(postUserSuccess(res)))
    .catch(err=>dispatch(postUserFailure(err)))
}

export const fetchDataSuccess = payload => ({
    type:FETCH_DATA_SUCCESS,
    payload
})

export const fetchDataFailure = payload => ({
    type:FETCH_DATA_FAILURE,
    payload
})

export const fetchData = payload => dispatch => {
    console.log(payload)
    axios.get("https://api.github.com/search/users",{
        params:{
            q:payload.value
        }
    })
    .then(res=>res.data)
    .then(res=>dispatch(fetchDataSuccess(res)))
    .catch(err=>dispatch(fetchDataFailure(err)))
}

