import axios from "axios";
import { SIGNIN_USERS_FAILURE, SIGNIN_USERS_REQUEST, SIGNIN_USERS_SUCCESS, SIGNUP_USERS_FAILURE, SIGNUP_USERS_REQUEST, SIGNUP_USERS_SUCCESS  , SIGNOUT_USER} from "./userType";
import http from "@/src/sevices/httpServices";
import toast from "react-hot-toast";
import Router from "next/router";


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
            http
            .post("/user/signin" , data , {withCredentials: true})
            .then((({data})=>{
                toast.success(`${data.name}  خوش آمدید ` );
                Router.push("/");
                dispatch(signinUsersSuccess(data));
            }))
            .catch((eroor)=>{
                const errorMessage = 
                    eroor.response && eroor.response.data.message 
                    ? eroor.response.data.message 
                    : eroor.message;
                toast.error(errorMessage);
                dispatch(signinUsersFailure(eroor.message));
            })
    }
}

export const userSignup = (data)=>{
    return (dispatch)=>{
        dispatch(signupUsersRequest());
            http
            .post("/user/signup" , data , {withCredentials: true})
            .then(({data})=>{
                toast.success(`${data.name}  خوش آمدید ` );
                Router.push("/");
                dispatch(signinUsersSuccess(data));
                dispatch(signupUsersSuccess(data));
            })
            .catch((eroor)=>{
                const errorMessage = 
                    eroor.response && eroor.response.data.message 
                    ? eroor.response.data.message 
                    : eroor.message;
                toast.error(errorMessage);
                dispatch(signupUsersFailure(eroor.message));
            })
    }
}

export const signout = ()=> (dispatch) =>{
    dispatch({type: SIGNOUT_USER })
    http
        .get("/user/logout" , {withCredentials: true})
        .then(({data})=>{
            window.location.href = "/";
        })
        .catch()
}

export const loadUserData = (store) =>{
    http
        .get('/user/load' , {withCredentials: true})
        .then(({data}) => {
            store.dispatch(signinUsersSuccess(data));
            })
        .catch((err) => {})
}