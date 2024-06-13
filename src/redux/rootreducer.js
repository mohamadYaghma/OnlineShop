import {combineReducers } from "redux";
import { userSinginReducer, userSingupReducer }  from "./user/userReducer";
const rootReducer = combineReducers({
    userSignin: userSinginReducer ,
    userSignup: userSingupReducer ,
});
export default rootReducer;