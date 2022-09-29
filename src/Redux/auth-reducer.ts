import {Dispatch} from "redux";
import {authAPI} from "../API/api";
import {AppDispatch} from "./redux-store";


const SET_USER_DATA = 'AUTH/SET_USER_DATA'

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
    {type: "AUTH/SET_USER_DATA", data: {userId: number|null, email: string|null, login: string|null, isAuth: boolean}} => {
    return {
        type: "AUTH/SET_USER_DATA", data: {userId, email, login, isAuth}
    } as const
}
export const authUserData = ()=> {
    return async (dispatch: Dispatch) => {
       const response = await authAPI.me()
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean)=>{
    return async (dispatch: AppDispatch) =>{
       const res = await authAPI.login(email, password, rememberMe)
                if (res.data.resultCode === 0){
                    dispatch(authUserData())
                }
    }
}

export const LogoutTC = () =>{
    return async (dispatch: AppDispatch)=>{
        const res = await authAPI.logout()
                if (res.data.resultCode === 0){
                    dispatch(setAuthUserData(null, null, null, false))
                }
    }
}