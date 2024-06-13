import {createWrapper , HYDRATE} from "next-redux-wrapper" ;
import {applyMiddleware , createStore} from "redux" ;
import thunkMiddleware from "redux-thunk" ;
import rootReducer from "./rootreducer";


const bindMiddleware = (middlware)=>{
    if(process.env.NODE_ENV !== "production"){
        const {composeWithDevTools} = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middlware));
    }
    return applyMiddleware(...middlware);
};
const masterReducer = (state , action ) =>{
    if(action.type === HYDRATE){
        const nextState = {
            ...state,
            ...action.payload,
            // counter:{
            //     count : state.counter.count + action.payload.counter.count,
            // },
            // user:{
            //     users : [...new Set([...state.users.users , ...action.payload.users.users])],
            // }
        }
        return nextState;
    } else {
        return rootReducer(state , action);
    }
}

const initStore = () =>{
    return createStore(masterReducer , bindMiddleware([thunkMiddleware]));
};
export const wrapper = createWrapper(initStore);