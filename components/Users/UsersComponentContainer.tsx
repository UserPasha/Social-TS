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
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Rings} from 'react-loader-spinner'
import UserPresentationComponent from './UserPresentationComponent'



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
            {props.isLoading ? <Rings color="#00BFFF" height={80} width={80}/> : null}
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        requestToFollowIdArray: state.usersPage.requestToFollowIdArray
    }
}


export default connect(mapStateToProps, {

    setCurrentPage, setTotalUsersList, togglePreloader
    , followRequester, getUsersList: getUsersListThunkCreator,
    getCurrentPage: getCurrentPageThunkCreator, unFollowUser: unFollowUserThunkCreator,
    followUser: followUserThunkCreator
})(UserComponentContainer)