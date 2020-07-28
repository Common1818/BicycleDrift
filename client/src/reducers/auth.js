import {
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   REGISTER_SUCCESS,
   REGISTER_FAIL,
   USER_LOADED,
   AUTH_ERROR,
} from '../actions/types';

const initialState = {
   token: localStorage.getItem('token'),
   isAuthenticated: null,
   loading: true,
   user: null,
   isAdmin: null,
};

export default function (state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
      case USER_LOADED:
         console.log(payload);
         return {
            ...state,
            user: payload,
            isAuthenticated: true,
            isAdmin: payload.role == 0 ? false : true,
            loading: false,
         };
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
         localStorage.setItem('token', payload.token);
         localStorage.setItem('userId', payload.userId);
         console.log(payload);
         return {
            ...state,
            ...payload,
            isAuthenticated: true,
            loading: false,
         };
      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case AUTH_ERROR:
         localStorage.removeItem('token');
         localStorage.removeItem('userId');
         return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false,
            userId: null,
         };
      default:
         return state;
   }
}
