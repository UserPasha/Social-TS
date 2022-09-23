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
            <span>
                <div>
                    <NavLink to={'/profile/' + userItem.id}>
                        <img src={userItem.photos?.small !== null ? userItem.photos!.small : userPhoto}
                             alt={'Avatar image'}/>
                    </NavLink>

                        </div>
                        <div>
                            {userItem.followed
                                ?


                                <button disabled={requestToFollowIdArray.some(id => id === userItem.id)}
                                        onClick={() => {
                                            unFollowUser(userItem.id)


                                        }}>Unfollow</button>
                                :

                                <button disabled={requestToFollowIdArray.some(id => id === userItem.id)}
                                        onClick={() => {
                                            followUser(userItem.id)


                                        }}>follow</button>}
                        </div>
                    </span>
                 <span>
                    <span>
                      <div>{userItem.name}</div>
                      <div>{userItem.status}</div>
                   </span>
                        <span>
                            <div>
                                {"m.location.country"}
                            </div>
                            <div>
                                {"m.location.city"}
                            </div>
                        </span>
                 </span>

        </div>)

};

export default User;