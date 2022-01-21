import c from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={c.navigation}>
            <div className={c.item}/*{`${c.item} ${c.active}`}*/>
                <NavLink to={"/profile"} className={navData => navData.isActive ? c.active : c.item}>Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={"/messages"} className={navData => navData.isActive ? c.active : c.item}>Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={"/news"} className={navData => navData.isActive ? c.active : c.item}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={"/music"} className={navData => navData.isActive ? c.active : c.item}>Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={"/settings"} className={navData => navData.isActive ? c.active : c.item}>Settings</NavLink>
            </div>
        </nav>
    );
};
export default Navbar;