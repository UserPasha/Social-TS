import {authUserData, setAuthUserDatatype} from "./auth-reducer";

import {AppDispatch} from "./redux-store";


const SET_SUCCESS_INITIALIZED = 'APP/SET_SUCCESS_INITIALIZED'

type AppActionType = ReturnType<typeof initializedSuccess>

type initialStateType = {
    isInitialize: boolean
}

let initialState: initialStateType = {
    isInitialize: false
}

export const appReducer = (state = initialState, action: AppActionType) => {
    switch (action.type) {
        case SET_SUCCESS_INITIALIZED: {
            return {
                ...state, isInitialize: true
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: SET_SUCCESS_INITIALIZED} as const)

export const initializeApp = () => {
    return (dispatch: AppDispatch) => {
        let promiseFromAuthReducer = dispatch(authUserData())
        //dispatch(anotherThunk())
        Promise.all([promiseFromAuthReducer])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }
}