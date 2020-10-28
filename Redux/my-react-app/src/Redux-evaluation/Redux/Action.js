import Axios from "axios"
import {
// --------FETCH LOGIN-------------
        POST_LOGIN_SUCCESS,
        POST_LOGIN_REQUEST,
        POST_LOGIN_FAILURE,
// --------FETCH CITY-----------------
        FETCH_CITY_DATA_SUCCESS,
        FETCH_CITY_DATA_REQUEST,
        FETCH_CITY_DATA_FAILURE,
// ----------FETCH COUNTRY-------------
        FETCH_COUNTRY_DATA_SUCCESS,
        FETCH_COUNTRY_DATA_FAILURE,
        FETCH_COUNTRY_DATA_REQUEST,
// -----------ADD COUNTRY------------
        ADD_COUNTRY_DATA_SUCCESS,
        ADD_COUNTRY_DATA_FAILURE,
        ADD_COUNTRY_DATA_REQUEST,
// --------POST ALL DATA----------
        POST_ALL_DATA_REQUEST,
        POST_ALL_DATA_SUCCESS,
        POST_ALL_DATA_FAILURE,
// --------DELETE DATA----------
        DELETE_DATA_REQUEST,
        DELETE_DATA_SUCCESS,
        DELETE_DATA_FAILURE,
// --------EDIT DATA----------
        EDIT_DATA_REQUEST,
        EDIT_DATA_SUCCESS,
        EDIT_DATA_FAILURE,



    } from "./actionType"

// --------------------FETCH CITY DATA FUNCTION---------------------------
export const fetchCityDataSuccess = payload =>({
    type:FETCH_CITY_DATA_SUCCESS,
    payload
    }) 
export const fetchCityDataFailure = payload =>({
    type:FETCH_CITY_DATA_FAILURE,
    payload
    })   
export const fetchCityDataRequest = payload =>({
    type:FETCH_CITY_DATA_REQUEST,
    payload
    })  
export const fetchCityData = payload=> dispatch => {
    dispatch(fetchCityDataRequest(payload))
    Axios.get("http://localhost:3000/city")
    .then((res)=>dispatch(fetchCityDataSuccess(res)))
    .then(res=>console.log(res))
    .catch((err)=>dispatch(fetchCityDataFailure(err)))
}

// --------------FETCH COUNTRY DATA FUNCTION------------------------
export const fetchCountryDataSuccess = payload =>({
    type:FETCH_COUNTRY_DATA_SUCCESS,
    payload
    })      
export const fetchCountryDataFailure = payload =>({
    type:FETCH_COUNTRY_DATA_FAILURE,
    payload
})
export const fetchCountryDataRequest = payload =>({
    type:FETCH_COUNTRY_DATA_REQUEST,
    payload
})
export const fetchCountryData = payload => dispatch => {
    dispatch(fetchCountryDataRequest(payload))
    Axios.get("http://localhost:3000/country")
    .then((res)=>(dispatch(fetchCountryDataSuccess(res))))
    .catch(err=>(dispatch(fetchCountryDataFailure)))
}

// ---------------POST LOGIN DATA FUNCTION-----------------------------
export const postLoginSuccess = payload =>({
    type:POST_LOGIN_SUCCESS,
    payload
    })
export const postLoginRequest = payload =>({
    type:POST_LOGIN_REQUEST,
    payload
    })
export const postLoginFailure = payload =>({
    type:POST_LOGIN_FAILURE,
    payload
})
export const postLoginData = payload => dispatch => {
    dispatch(postLoginRequest(payload))
    Axios.post("https://masai-api-mocker.herokuapp.com/auth/login",{
        username:payload.uName, 
        password:payload.pass
    })
    .then(res=>dispatch(postLoginSuccess(res.data)))
    .then(res=>dispatch(fetchCityData(res)))
    .then(res=>dispatch(fetchCountryData(res)))
    .catch(err=>dispatch(postLoginFailure(err)))
}

// ------------------ADD COUNTRY--------------------------

export const addCountryDataRequest = payload =>({
    type:ADD_COUNTRY_DATA_REQUEST,
    payload
})
export const addCountryDataSuccess = payload =>({
    type:ADD_COUNTRY_DATA_SUCCESS,
    payload
})
export const addCountryDataFailure = payload =>({
    type:ADD_COUNTRY_DATA_FAILURE,
    payload
})
export const addCountryData = payload => dispatch => {
    dispatch(addCountryDataRequest(payload))
    Axios.post("http://localhost:3000/country",{
        name:payload.country
    })
    .then(res=>dispatch(addCountryDataSuccess(res)))
    .then(res=>dispatch(fetchCountryData(res)))
    .catch(err=>dispatch(addCountryDataFailure(err)))     
}

// ------------------------SUBMIT ALL DATA --------------------

export const postAllDataRequest = payload =>({
    type:POST_ALL_DATA_REQUEST,
    payload
})
export const postAllDataSuccess = payload =>({
    type:POST_ALL_DATA_SUCCESS,
    payload
})
export const postAllDataFailure = payload =>({
    type:POST_ALL_DATA_FAILURE,
    payload
})
export const postAllData = payload => dispatch => { 
    dispatch(postAllDataRequest(payload)) 
    Axios.post("http://localhost:3000/city",{
        name:payload.city,
        country_code:payload.country,
        population:payload.population
    })
    .then(res=>dispatch(postAllDataSuccess(res)))
    .then(res=>dispatch(fetchCityData(res)))
    .catch(err=>dispatch(postAllDataFailure(err)))    
}

// -------------------DELETES DATA -------------------------

export const deleteDataRequest = payload =>({
    type:DELETE_DATA_REQUEST,
    payload
})
export const deleteDataSuccess = payload =>({
    type:DELETE_DATA_SUCCESS,
    payload
})
export const deleteDataFailure = payload =>({
    type:DELETE_DATA_FAILURE,
    payload
})
export const deleteData = payload => dispatch =>{
    dispatch(deleteDataRequest(payload))
    Axios.delete(`http://localhost:3000/city/${payload}`)
    .then((res)=>dispatch(deleteDataSuccess(res)))
    .then(res=>dispatch(fetchCityData(res)))
    .catch((err)=>dispatch(deleteDataFailure(err)))
}

// -----------------EDIT DATA --------------------------------
export const editDataRequest = payload =>({
    type:EDIT_DATA_REQUEST,
    payload
})
export const editDataSuccess = payload =>({
    type:EDIT_DATA_SUCCESS,
    payload
})
export const editDataFailure = payload =>({
    type:EDIT_DATA_FAILURE,
    payload
})
export const edit = (payload => dispatch => {
    dispatch(editDataRequest(payload))
    Axios.patch(`http://localhost:3000/city/${payload.id}`,{
        population:payload.population
    })
    .then(res=>dispatch(editDataSuccess(res)))
    .then(res=>dispatch(fetchCityData(res)))
    .catch(err=>dispatch(editDataFailure(err)))
})



