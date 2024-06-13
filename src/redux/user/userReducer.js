import { SIGNIN_USERS_FAILURE, SIGNIN_USERS_REQUEST, SIGNIN_USERS_SUCCESS, SIGNUP_USERS_FAILURE, SIGNUP_USERS_REQUEST, SIGNUP_USERS_SUCCESS } from "./userType";

// const initialState ={
//     loading : true , 
//     user:[],
//     error:null,
// }

export const userSinginReducer = (state = {} , action)=>{
    switch(action.type){
        case SIGNIN_USERS_REQUEST:
            return{
                loading:true,
            }
        case SIGNIN_USERS_SUCCESS:
            return{
                loading:false,
                user: action.payload,
                error: "",
            }
        case SIGNIN_USERS_FAILURE:
            return{
                loading:false,
                error: action.payload,
            }
    }
}

export const userSingupReducer = (state = initialState , action)=>{
    switch(action.type){
        case SIGNUP_USERS_REQUEST:
            return{
                loading:true,
            }
        case SIGNUP_USERS_SUCCESS:
            return{
                loading:false,
                user: action.payload,
                error: "",
            }
        case SIGNUP_USERS_FAILURE:
            return{
                loading:false,
                error: action.payload,
            }
    }
}