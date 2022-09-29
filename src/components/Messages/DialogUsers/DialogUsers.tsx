import React, {FC, memo} from 'react';
import {NavLink} from "react-router-dom";
import c from "./DialogUser.module.css"

export type DialogsType = {
    name: string
    id: number
    img: string
}


const DialogUsers:FC<DialogsType> = memo(({id, img, name}) => {
    let path = "/messages/" + id
    return (
        <div className={c.item}>
            <img
                src={img}
                alt="avatar"/>
            <NavLink to={path}className={navData => navData.isActive ? c.active : c.item}><span>{name}</span></NavLink>
        </div>
    );
});

export default DialogUsers;