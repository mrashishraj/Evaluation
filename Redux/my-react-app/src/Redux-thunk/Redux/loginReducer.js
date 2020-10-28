import {FETCH_USERS_FAILURE,FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS} from "./ActionType"

export const initState = {
    isLoading:false,
    isError:false,
    isAuth:false,
    token:""
}

console.log(initState)

export default (state=initState,{type,payload}) => {
    console.log(payload,state)
    switch(type){
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
            };
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false,
                token:payload.token
            };
        default:
            return state;

    }
}