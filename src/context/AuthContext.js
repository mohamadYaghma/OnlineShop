import axios from "axios";
import toast from "react-hot-toast";
import { useReducerAsync } from 'use-reducer-async';
import Router from "next/router";

const { createContext, useContext, useReducer, useEffect } = require("react");

const authContext = createContext();
const authContextDispather = createContext();

const initialstate = {user:null , loading : false , error : null}
const reducer = (state , action)=>{
    switch(action.type){
        case "SIGNIN_PENDING" : return{user :null , error:false , loading  : true};
        case "SIGNIN_SUCCESS" : return{loading:false , error:null , user:action.payload};
        case "SIGNIN_REJECT" : return{ error :action.error , loading : false , user:null};
        default : 
            return {...state}
    }
}
const asyncActionHandlers ={
        SIGNIN: 
            ({dispatch}) =>
                (action)=>{ 
                    dispatch({type: "SIGNIN_PENDING"})
                     axios
                    .post('http://localhost:5000/api/user/signin' , action.payload , {withCredentials: true})
                    .then(({data}) => {
                        toast.success( "خوش آمدید" );
                        dispatch({type: "SIGNIN_SUCCESS" , payload : data});
                        Router.push("/");
                                    }               
                        )
                    .catch(err => {
                        dispatch({type: "SIGNIN_REJECT" , error : err?.response?.data?.message});
                        toast.error(err?.response?.data?.message );
                    }
                        )
        },
        SIGNUP:
            ({dispatch}) =>
            (action)=>{ 
                dispatch({type: "SIGNUP_PENDING"})
                axios
                .post('http://localhost:5000/api/user/signup' , action.payload , {withCredentials: true})
                .then(({data}) => {
                    toast.success( "خوش آمدید" );
                    dispatch({type: "SIGNIN_SUCCESS" , payload : data});
                    Router.push("/");
                    })
                .catch(err => {
                    dispatch({type: "SIGNIN_REJECT" , error : err?.response?.data?.message});
                    toast.error(err?.response?.data?.message );
                }
                )
            },
        LOAD_USER: 
            ({dispatch}) =>
                (action)=>{ 
                    dispatch({type: "SIGNUP_PENDING"})
                    axios
                    .get('http://localhost:5000/api/user/load' , {withCredentials: true})
                    .then(({data}) => {
                        dispatch({type: "SIGNIN_SUCCESS" , payload : data});
                        })
                    .catch(err => {
                        dispatch({type: "SIGNIN_REJECT" , error : err?.response?.data?.message});
                    }
            )},
        SIGNOUTE:
        ({dispatch}) =>
            (action)=>{ 
                dispatch({type: "SIGNUP_PENDING"})
                axios
                .get('http://localhost:5000/api/user/logout'  , {withCredentials: true})
                .then(({data}) => {
                    window.location.href="/";
                    })
                .catch(err => {
                    dispatch({type: "SIGNIN_REJECT" , error : err?.response?.data?.message});
                }
                )
            },
}

const AuthProvier = ({children}) => {
    const [user , dispatch] = useReducerAsync(reducer , initialstate , asyncActionHandlers);
    useEffect(()=>{
        dispatch({type:"LOAD_USER"});
    } , []);
    return ( 
        <authContext.Provider value={user}>
            <authContextDispather.Provider value={dispatch}>
                {children}
            </authContextDispather.Provider>
        </authContext.Provider>
     );
}
 
export default AuthProvier;

export const useAuth = () => useContext(authContext);
export const useAuthAction = () => useContext(authContextDispather);