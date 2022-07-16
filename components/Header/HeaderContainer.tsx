import Header from "./Header";
import React, {useEffect} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {AppRootStateType} from "../../Redux/redux-store";

type mapStateToProps = {
    isAuth: boolean
    login: string | null
}

type mapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}
type HeaderContainerPropsType = mapStateToProps & mapDispatchPropsType
// class HeaderContainer extends React.Component {
//
//     componentDidMount() {
//         axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",
//             {withCredentials: true}).then(response => {
//             if (response.data.resultCode === 0) {
//                 let {id, email, login} = response.data.data
//                 props.setAuthUserData(id, email, login)
//
//             }
//         })
//
//     }
//
//     render() {
//         return <Header {...this.props}/>
//     }
// }

const HeaderContainer = (props: HeaderContainerPropsType) => {
    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",
            {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                props.setAuthUserData(id, email, login)
            }
        })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)