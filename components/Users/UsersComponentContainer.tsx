import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersList,
    setUsers,
    unFollow,
    UserType, togglePreloader, followRequester
} from "../../Redux/users-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Rings} from 'react-loader-spinner'
import UserPresentationComponent from './UserPresentationComponent'
import {usersAPI} from "../../API/api";


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
    follow: (userId: string | number) => void
    unFollow: (userId: string | number) => void
    setUsers: (newUsers: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersList: (totalCount: number) => void
    togglePreloader: (isLoadingBoolean: boolean) => void
   followRequester:  (isLoadingBoolean: boolean, id: number| string)=>void
}

const UserComponentContainer = (props: UserPropsType) => {
    React.useEffect(() => {
        props.togglePreloader(true)
        usersAPI.getListOfUsers(props.currentPage, props.pageSize).then(data => {
            props.togglePreloader(false)
            props.setUsers(data.items);
            props.setTotalUsersList(data.totalCount)
            console.log(data.totalCount)
        })
    }, [])

    const onPageHandler = (pageNumber: number) => {
        props.setCurrentPage(pageNumber);
        console.log(pageNumber)
        props.togglePreloader(true)
        usersAPI.getCurrentPage(pageNumber, props.pageSize).then(data => {
            props.togglePreloader(false)
            props.setUsers(data.items)
            console.log(data.items)
        })
    }
    return (
        <>
            {props.isLoading ? <Rings color="#00BFFF" height={80} width={80}/> : null}
            <UserPresentationComponent totalUsers={props.totalUsers}
                                       pageSize={props.pageSize}
                                       currentPage={props.currentPage}
                                       onPageHandler={onPageHandler}
                                       follow={props.follow}
                                       unFollow={props.unFollow}
                                       users={props.users}
                                       followRequester={props.followRequester}
                                      requestToFollowIdArray={props.requestToFollowIdArray}
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
    follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersList, togglePreloader
    , followRequester
})(UserComponentContainer)