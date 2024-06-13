import axios from "axios";
import { SIGNIN_USERS_FAILURE, SIGNIN_USERS_REQUEST, SIGNIN_USERS_SUCCESS, SIGNUP_USERS_FAILURE, SIGNUP_USERS_REQUEST, SIGNUP_USERS_SUCCESS } from "./userType";
import http from "@/src/sevices/httpServices";


export const signinUsersRequest =()=>{
    return{
        type: SIGNIN_USERS_REQUEST,
    }
}

export const signinUsersSuccess =(users)=>{
    return{
        type: SIGNIN_USERS_SUCCESS,
        payload: users,
    }
}

export const signinUsersFailure =(error)=>{
    return{
        type: SIGNIN_USERS_FAILURE,
        payload: error,
    }
}
// function signup
export const signupUsersRequest =()=>{
    return{
        type: SIGNUP_USERS_REQUEST,
    }
}

export const signupUsersSuccess =(users)=>{
    return{
        type: SIGNUP_USERS_SUCCESS,
        payload: users,
    }
}

export const signupUsersFailure =(error)=>{
    return{
        type: SIGNUP_USERS_FAILURE,
        payload: error,
    }
}


// signin 
export const userSignin = (data)=>{
    return (dispatch)=>{
        dispatch(signinUsersRequest());
        axios
            http
            .post("/user/signin" , data , {withCredentials: true})
            .then((response=>{
                dispatch(signinUsersSuccess(response.data));
            }))
            .catch((eroor)=>{
                dispatch(signinUsersFailure(eroor.message));
            })
    }
}

export const userSignup = (data)=>{
    return (dispatch)=>{
        dispatch(signupUsersRequest());
        axios
            http
            .post("/user/signup" , data , {withCredentials: true})
            .then((response=>{
                dispatch(signupUsersSuccess(response.data));
            }))
            .catch((eroor)=>{
                dispatch(signupUsersFailure(eroor.message));
            })
    }
}