import React, {FC, memo} from 'react';
import c from "./UserPresentationComponent.module.css";
import {UserType} from "../../Redux/users-reducer";
import Pagination from "../../Common/Components/Pagination/Pagination";
import User from "./User";


//IS ACTIVE
type UserPresentationPropsType = {
    totalUsers: number
    pageSize: number
    currentPage: number
    onPageHandler: (p: number) => void
    users: Array<UserType>
    followRequester: (isLoadingBoolean: boolean, id: number | string) => void
    requestToFollowIdArray: Array<number | string>
    unFollowUser: (id: number | string) => void
    followUser: (id: number | string) => void

}
const UserPresentationComponent: FC<UserPresentationPropsType> = memo((
    {
        totalUsers,
        pageSize,
        currentPage,
        onPageHandler,
        users,
        unFollowUser,
        followRequester,
        followUser,
        requestToFollowIdArray
    }) => {

    return (
        <div className={c.wrapper}>
            {
                users.map((m, index) => <User key={m.id}
                                              userItem={m}
                                              requestToFollowIdArray={requestToFollowIdArray}
                                              followUser={followUser}
                                              unFollowUser={unFollowUser}/>
                )
            }
            <Pagination totalUsers={totalUsers}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageHandler={onPageHandler}
            />
        </div>)
});


export default UserPresentationComponent;