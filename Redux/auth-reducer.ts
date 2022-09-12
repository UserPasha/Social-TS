import {Dispatch} from "redux";
import {authAPI} from "../API/api";
import {AppDispatch} from "./redux-store";


const SET_USER_DATA = 'SET_USER_DATA'

type initialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type setAuthUserDataType = setAuthUserDatatype

export type setAuthUserDatatype = ReturnType<typeof setAuthUserData>

export type AuthActionType = setAuthUserDataType


let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state = initialState, action: AuthActionType) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state
    }
}


export const setAuthUserData = (userId: number|null, email: string|null, login: string|null, isAuth: boolean):
    {type: "SET_USER_DATA", data: {userId: number|null, email: string|null, login: string|null, isAuth: boolean}} => {
    return {
        type: "SET_USER_DATA", data: {userId, email, login, isAuth}
    } as const
}
export const authUserData = ()=> {
    return (dispatch: Dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean)=>{
    return (dispatch: AppDispatch) =>{
        authAPI.login(email, password, rememberMe)
            .then(res=>{
                if (res.data.resultCode === 0){
                    dispatch(authUserData())
                }
            })
    }
}

export const LogoutTC = () =>{
    return (dispatch: AppDispatch)=>{
        authAPI.logout()
            .then(res=>{
                if (res.data.resultCode === 0){
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}