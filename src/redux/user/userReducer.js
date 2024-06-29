import { SIGNIN_USERS_FAILURE, SIGNIN_USERS_REQUEST, SIGNIN_USERS_SUCCESS, SIGNUP_USERS_FAILURE, SIGNUP_USERS_REQUEST, SIGNUP_USERS_SUCCESS } from "./userType";

const initialStateSignin = {
    userInfo: null,
};

const initialStateSignup = {
    userInfo: null,
};

export const userSigninReducer = (state = initialStateSignin, action) => {
    switch (action.type) {
        case SIGNIN_USERS_REQUEST:
            return {
                loading: true,
            };
        case SIGNIN_USERS_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: "",
            };
        case SIGNIN_USERS_FAILURE:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const userSignupReducer = (state = initialStateSignup, action) => {
    switch (action.type) {
        case SIGNUP_USERS_REQUEST:
            return {
                loading: true,
            };
        case SIGNUP_USERS_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: "",
            };
        case SIGNUP_USERS_FAILURE:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
