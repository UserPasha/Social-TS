import React, {ComponentType} from 'react';
import {AppRootStateType} from "../Redux/redux-store";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

type mapStateToRedirectProps = {
    isAuth: boolean
}

let mapStateToRedirectProps = (state: AppRootStateType):mapStateToRedirectProps => ({
    isAuth: state.auth.isAuth
})

export function WithAuthRedirect <T>(Component:ComponentType<T>)  {

    const RedirectComponent = (props: mapStateToRedirectProps) =>{
        let{isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to="/login" />
        return < Component {...restProps as T}/>
    }

    let ConnectedWithAuthRedirectComponent = connect(mapStateToRedirectProps)(RedirectComponent)
    return ConnectedWithAuthRedirectComponent
};

