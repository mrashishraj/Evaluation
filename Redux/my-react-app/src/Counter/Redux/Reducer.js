import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_REQUEST,
    FETCH_USERS_FAILURE,
    POST_USERS_FAILURE,
    POST_USERS_SUCCESS,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE 
} from "./ActionType";


export const initState = {
    isLoading: false,
    isError: false,
    token: "",
    isAuth: false,
    isRegister:false,
    msg:""
}

console.log(initState)


export default (state = initState, {
    type,
    payload
}) => {
    switch (type) {
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                msg:payload.message
            };
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        case FETCH_USERS_SUCCESS:
            console.log(payload)
            return {
                ...state,
                isLoading: false,
                token: payload.token,
                isError:false,
                isAuth:true,
            };
        
        case POST_USERS_SUCCESS:
            console.log(payload)
            return{
                ...state,
                isLoading:false,
                isRegister:true,
                isError:false,
            };
        
        case POST_USERS_FAILURE:
            return{
                ...state,
                isLoading:false,
                msg:payload.message
            };
        case FETCH_DATA_SUCCESS:
            console.log(payload)
            return{
                ...state,
                isLoading:false,
                data:payload.items
            };
        case FETCH_DATA_FAILURE:
            console.log(payload)
            return{
                ...state,
                isLoading:false,
                msg:payload.message,
                isError:true
            }
        default:
            return state;
    }
};