import c from "./Header.module.css"
import {NavLink} from "react-router-dom";
import React, {FC, memo} from "react";

import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {Rings} from "react-loader-spinner";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header:FC<HeaderPropsType> = memo(({isAuth, login, logout}) => {
    const isLoading = useSelector<AppRootStateType, boolean>((state)=> state.usersPage.isLoading)

    return (

            <header className={c.header}>
                <img
                    src="https://media.gettyimages.com/vectors/happy-family-with-children-walking-at-sunset-time-vector-id474121696"
                    alt="logo"/>
                {isLoading&&<div className={c.loading}>
                    <Rings color="#FFF" height={80} width={80}/>
                </div>}
                <div className={c.login}>
                    {isAuth? <div className={c.loginName}>{login}
                            <button onClick={logout}>Log Out</button>
                    </div>:
                        <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
        
    );
});
export default Header;