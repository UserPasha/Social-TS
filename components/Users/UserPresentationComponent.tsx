import React from 'react';
import c from "./UserComponentFunctional.module.css";
import userPhoto from "../../Common/Images/users.png";
import {NavLink} from "react-router-dom";
import {followRequester, UserType} from "../../Redux/users-reducer";
import { usersAPI } from '../../API/api';

//IS ACTIVE
type UserPresentationPropsType = {
    totalUsers: number
    pageSize: number
    currentPage: number
    onPageHandler: (p: number)=> void
    follow: (userId: string)=> void
    unFollow: (userId: string)=> void
    users: Array<UserType>
    followRequester: (isLoadingBoolean: boolean, id: number| string)=>void
    requestToFollowIdArray: Array<number | string>
}
const UserPresentationComponent = (props: UserPresentationPropsType) => {
    let pagesOfgUsers = Math.ceil(props.totalUsers / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesOfgUsers; i++) {
        pages.push(i)
    }

    return (
        <div className={c.wrapper}>
            <div className={c.pagesCount}>
                {pages.map(p => <span key={p+new Date().getMilliseconds()}
                                      className={props.currentPage === p ? c.selected : ''}
                                      onClick={(e) => {
                                          props.onPageHandler(p)
                                      }}
                >{p}</span>)}
            </div>
            {
                props.users.map(m => <div key={m.id+new Date().getMilliseconds()}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + m.id}>
                            <img src={m.photos!.small !== null ? m.photos!.small : userPhoto} alt={'Avatar image'}/>
                            </NavLink>
                            {/*<img src={userPhoto}*/}
                            {/*     alt={'Avatar image'}/>*/}
                        </div>
                        <div>
                            {m.followed
                                ?

                                // <button onClick={() => props.follow(m.id)}>Unfollow</button>
                                <button disabled={props.requestToFollowIdArray.some(id => id === m.id)} onClick={() => {
                                    props.followRequester(true, m.id)
                                    usersAPI.unfollowUser(m.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.unFollow(m.id)
                                        }
                                        props.followRequester(false, m.id)

                                    })

                                }}>Unfollow</button>
                            :
                            // <button onClick={() => props.unFollow(m.id)}>Follow</button>
                                <button disabled={props.requestToFollowIdArray.some(id => id === m.id)} onClick={() => {
                                    props.followRequester(true, m.id)

                                    usersAPI.followUser(m.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(m.id)
                                        }
                                        props.followRequester(false, m.id)

                                    })

                                }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
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
            }
        </div>)
};


export default UserPresentationComponent;