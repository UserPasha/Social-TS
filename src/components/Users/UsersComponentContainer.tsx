import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalUsersList,
    UserType,
    togglePreloader,
    followRequester,
    getUsersListThunkCreator,
    getCurrentPageThunkCreator,
    unFollowUserThunkCreator, followUserThunkCreator
} from "../../Redux/users-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import React from "react";
import UserPresentationComponent from './UserPresentationComponent'
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRediresct";
import {
    getCurrentPage,
    getIsLoading,
    getPaigeSize,
    getRequestToFollowIdArray,
    getTotalUsers,
    getUsers
} from "../../Redux/users-selectors";



//IS ACTIVE

export type UserPropsType = mapStateToPropsType & mapDispatchToPropsType


type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsers: number
    currentPage: number
    isLoading: boolean
    requestToFollowIdArray: Array<number | string>
}
type mapDispatchToPropsType = {

    setCurrentPage: (pageNumber: number) => void
    setTotalUsersList: (totalCount: number) => void
    togglePreloader: (isLoadingBoolean: boolean) => void
   followRequester:  (isLoadingBoolean: boolean, id: number| string)=>void
    getUsersList: (currentPage: number, pageSize: number) => void
    getCurrentPage: (pageNumber:number, pageSize:number)=> void
    unFollowUser: (id: number| string)=> void
    followUser: (id: number| string)=> void
}

const UserComponentContainer = (props: UserPropsType) => {
    React.useEffect(() => {
        props.getUsersList(props.currentPage, props.pageSize)
    }, [])

    const onPageHandler = (pageNumber: number) => {
        props.getCurrentPage(pageNumber, props.pageSize)

    }
    return (
        <>
            <UserPresentationComponent totalUsers={props.totalUsers}
                                       pageSize={props.pageSize}
                                       currentPage={props.currentPage}
                                       onPageHandler={onPageHandler}
                                       users={props.users}
                                       followRequester={props.followRequester}
                                      requestToFollowIdArray={props.requestToFollowIdArray}
                                       unFollowUser={props.unFollowUser}
                                       followUser={props.followUser}

            />
        </>
    )
}


let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPaigeSize(state),
        totalUsers: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        requestToFollowIdArray: getRequestToFollowIdArray(state)
    }
}




export default compose<React.ComponentType>(connect(mapStateToProps, {
    setCurrentPage, setTotalUsersList, togglePreloader
    , followRequester, getUsersList: getUsersListThunkCreator,
    getCurrentPage: getCurrentPageThunkCreator, unFollowUser: unFollowUserThunkCreator,
    followUser: followUserThunkCreator
}),
    WithAuthRedirect)(UserComponentContainer)