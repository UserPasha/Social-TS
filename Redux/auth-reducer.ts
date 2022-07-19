import {Dispatch} from "redux";
import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA'

type initialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type setAuthUserDataType = ReturnType<typeof setAuthUserData>

type actionType = setAuthUserDataType


let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state = initialState, action: actionType) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}


export const setAuthUserData = (userId: number, email: string, login: string): {type: "SET_USER_DATA", data: {userId: number, email: string, login: string}} => {
    return {
        type: "SET_USER_DATA", data: {userId, email, login}
    } as const
}
export const authUserData = ()=> {
    return (dispatch: Dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}