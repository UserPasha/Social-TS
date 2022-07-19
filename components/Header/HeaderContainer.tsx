import Header from "./Header";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {authUserData} from "../../Redux/auth-reducer";
import {AppRootStateType} from "../../Redux/redux-store";


type mapStateToProps = {
    isAuth: boolean
    login: string | null
}

type mapDispatchPropsType = {
    authMe: () => void
}
type HeaderContainerPropsType = mapStateToProps & mapDispatchPropsType


const HeaderContainer = (props: HeaderContainerPropsType) => {
    useEffect(() => {
        props.authMe()
    }, [])
    return (
        <Header {...props}/>
    )
}

const mapStateToProps = (state: AppRootStateType): mapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, { authMe: authUserData})(HeaderContainer)