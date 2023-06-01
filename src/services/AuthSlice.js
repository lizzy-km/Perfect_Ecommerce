import {createSlice} from '@reduxjs/toolkit'
import Cookies from "js-cookie";


const initialState = {
    user:[null],
    token:[null],
    isLoading:false
};

const STORAGE_KEY_User = 'user'
const STORAGE_KEY_TOKEN = 'token'


//____________________________________________________storedUser_____________________Null_____//
const storedUser = Cookies.get(STORAGE_KEY_User) ? JSON.parse(Cookies.get(STORAGE_KEY_User)) : null



//____________________________________________________storedToken_____________________Null_____//
const storedToken = Cookies.get(STORAGE_KEY_TOKEN) ? JSON.parse(Cookies.get(STORAGE_KEY_TOKEN)) : null;

if (storedUser && storedToken) { 
  initialState.user = storedUser.user
  initialState.token = storedToken.token
}


export const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers: {
        addUser: (state, {payload} ) => {
            (state.user = payload.user);
            Cookies.set(STORAGE_KEY_User, JSON.stringify(state));
        },
        addToken: (state, {payload} ) => {
           (state.token = payload.token);
            Cookies.set(STORAGE_KEY_TOKEN, JSON.stringify(state));
        },
        removeUser: (state, {payload} ) => {
            (state.user = []);
            Cookies.set(STORAGE_KEY_User, JSON.stringify(state));
        },
        removeToken: (state, {payload} ) => {
           (state.token = []);
            Cookies.set(STORAGE_KEY_TOKEN, JSON.stringify(state));
        }
    }
})

export const { addUser,addToken,removeUser,removeToken } = authSlice.actions
export default authSlice.reducer