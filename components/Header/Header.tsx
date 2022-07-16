import c from "./Header.module.css"
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    setAuthUserData: (userId: number, email: string, login: string) => void
}
const Header = (props: HeaderPropsType) => {
    return (

            <header className={c.header}>
                <img
                    src="https://media.gettyimages.com/vectors/happy-family-with-children-walking-at-sunset-time-vector-id474121696"
                    alt="logo"/>
                <div className={c.login}>
                    {props.isAuth? props.login :
                        <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
        
    );
};
export default Header;