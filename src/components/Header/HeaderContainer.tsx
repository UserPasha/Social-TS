import Header from "./Header";
import React, {memo, useEffect} from "react";
import {connect} from "react-redux";
import {authUserData, LogoutTC} from "../../Redux/auth-reducer";
import {AppRootStateType} from "../../Redux/redux-store";


type mapStateToProps = {
    isAuth: boolean
    login: string | null
}

type mapDispatchPropsType = {
    logout: () => void
}
type HeaderContainerPropsType = mapStateToProps & mapDispatchPropsType


const HeaderContainer = memo((props: HeaderContainerPropsType) => {
    // useEffect(() => {
    //     props.logout()
    // }, [])
    return (
        <Header {...props}/>
    )
})

const mapStateToProps = (state: AppRootStateType): mapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, { logout: LogoutTC})(HeaderContainer)