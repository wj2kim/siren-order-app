import {

} from 'actions/types';

export default function (state = {}, action ) {
    switch ( action.type ) {
        case USER_LOGIN:
            return { ...state, loginSucess: action.payload };
        case AUTH_USER: 
            return { ...state, userData: action.payload };
        case USER_LOGOUT:
            return { ...state }
        default: 
            return state;
    }
}