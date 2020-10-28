import {
    POST_LOGIN_SUCCESS,
    POST_LOGIN_REQUEST,
    POST_LOGIN_FAILURE,

    FETCH_COUNTRY_DATA_SUCCESS,
    FETCH_COUNTRY_DATA_FAILURE,
    FETCH_COUNTRY_DATA_REQUEST,

    FETCH_CITY_DATA_SUCCESS,
    FETCH_CITY_DATA_FAILURE,
    FETCH_CITY_DATA_REQUEST,

    ADD_COUNTRY_DATA_SUCCESS,
    ADD_COUNTRY_DATA_FAILURE,
    ADD_COUNTRY_DATA_REQUEST,

    POST_ALL_DATA_REQUEST,
    POST_ALL_DATA_SUCCESS,
    POST_ALL_DATA_FAILURE,

    DELETE_DATA_REQUEST,
    DELETE_DATA_SUCCESS,
    DELETE_DATA_FAILURE,

    EDIT_DATA_REQUEST,
    EDIT_DATA_SUCCESS,
    EDIT_DATA_FAILURE,
} from "./actionType"



// ----------INITSTATE--------------
export const initState = {
    isLoading:false,
    isError:false,
    isAuth:false,
    isCity:false,
    token:"",
    data:"",
    country:"",
    city:"",
    message:""
}



export default (state = initState,{type,payload}) => {
    switch(type) {
// ---------------POST LOGIN------------------------
        case POST_LOGIN_SUCCESS:
            console.log(payload)
            return{
                ...state,
                isLoading:false,
                isAuth:true,
                token:payload.token
            };
        case POST_LOGIN_REQUEST:
            console.log(payload)
            return{
                ...state,
                isLoading:true
            }
        case POST_LOGIN_FAILURE:
            console.log(payload)
            return{
                ...state,
                isError:true,
                message:payload.message,
                isLoading:false
            }; 

// -----------------FETCH CITY-------------------------        
        case FETCH_CITY_DATA_SUCCESS:
            console.log(payload)
            return{
                ...state,
                isError:false,
                city:payload,
                isCity:true
            };
        case FETCH_CITY_DATA_FAILURE:
            return{
                ...state,
                isError:true,
                message:payload.message
            };
        case FETCH_CITY_DATA_REQUEST:
            return{
                ...state,
                isLoading:true,                
            }

// -------------------FETCH COUNTRY-------------------------        
        case FETCH_COUNTRY_DATA_SUCCESS:
            return{
                ...state,
                country:payload
            };
        case FETCH_COUNTRY_DATA_FAILURE:
            return{
                ...state,
                errMag:payload.message,
                isLoading:false
            };
        case FETCH_COUNTRY_DATA_REQUEST:
            return{
                ...state,
                isLoading:true
            };

// -------------------ADD COUNTRY DATA-----------------------------
        case ADD_COUNTRY_DATA_SUCCESS:
            return{
                ...state,
                isLoading:false,
                message:payload.message
            };
        case ADD_COUNTRY_DATA_REQUEST:
            return{
                ...state,
                isLoading:false,                
            }
        case ADD_COUNTRY_DATA_FAILURE:
            return{
                ...state,
                message:payload.message
            };

// -------------------POST ALL DATA-------------------------------
        case POST_ALL_DATA_REQUEST:
            return{
                ...state,
                isLoading:true,                
            };
        case POST_ALL_DATA_SUCCESS:
            return{
                ...state,
                message:payload.message,
                isLoading:false
            }
        case POST_ALL_DATA_FAILURE:
            return{
                ...state,
                isLoading:false,
                message:payload.message
            }

// ----------------DELETE DATA-----------------------------------
        case DELETE_DATA_REQUEST:
            return{
                ...state,
                isLoading:true,                
            }
        case DELETE_DATA_SUCCESS:
            return{
                ...state,
                isLoading:false,                
            }
        case DELETE_DATA_FAILURE:
            return{
                ...state,
                isLoading:false,
                message:payload.message
            }

// ----------------EDIT DATA------------------------------
        case EDIT_DATA_REQUEST:
            return{
                ...state,
                isLoading:true,                
            }
        case EDIT_DATA_SUCCESS:
            return{
                ...state,
                isLoading:false,                
            }
        case EDIT_DATA_FAILURE:
            return{
                ...state,
                isLoading:false,
                message:payload.message
            }
        default:
        return state;
    }
}