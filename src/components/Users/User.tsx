import React, {FC} from 'react';
import {UserType} from "../../Redux/users-reducer";
import c from "./User.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../Common/Images/users.png";

type UserPropsType = {
    userItem: UserType
    requestToFollowIdArray: Array<number | string>
    unFollowUser: (id: number | string) => void
    followUser: (id: number | string) => void
}

const User: FC<UserPropsType> = (
    {
        userItem,
        followUser,
        unFollowUser,
        requestToFollowIdArray
    }) => {
    return (
        <div className={c.wrapper}>
            <div className={c.infoWrapper}>
                <div className={c.generalInformation}>
                    <div className={c.name}>{userItem.name}</div>
                    <div className={c.status}>{userItem.status}</div>
                </div>
                <div className={c.imageWrapper}>
                    <NavLink to={'/profile/' + userItem.id}>
                        <img src={userItem.photos?.small !== null ? userItem.photos!.small : userPhoto}
                             alt={'Avatar image'}/>
                    </NavLink>

                </div>
                <div className={c.buttonWrapper}>
                    {userItem.followed
                        ?
                        <button disabled={requestToFollowIdArray.some(id => id === userItem.id)}
                                onClick={() => {
                                    unFollowUser(userItem.id)
                                }}>UNFOLLOW
                        </button>
                        :
                        <button disabled={requestToFollowIdArray.some(id => id === userItem.id)}
                                onClick={() => {
                                    followUser(userItem.id)
                                }}>FOLLOW
                        </button>}
                </div>

            </div>
            <div className={c.otherInformation}>
                            <div>
                                {"m.location.country"}
                            </div>
                            <div>
                                {"m.location.city"}
                            </div>
            </div>


        </div>)

};

export default User;