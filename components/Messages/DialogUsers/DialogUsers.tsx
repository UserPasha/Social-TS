import React from 'react';
import {NavLink} from "react-router-dom";
import c from "./DialogUser.module.css"

export type DialogsType = {
    name: string
    id: number
    img: string
}


const DialogUsers = (props: DialogsType) => {
    let path = "/messages/" + props.id
    return (
        <div className={c.item}>
            <img
                src={props.img}
                alt="avatar"/>
            <NavLink to={path}className={navData => navData.isActive ? c.active : c.item}><span>{props.name}</span></NavLink>
        </div>
    );
};

export default DialogUsers;