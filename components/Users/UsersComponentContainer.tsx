import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersList,
    setUsers,
    unFollow,
    UserType, togglePreloader
} from "../../Redux/users-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import React from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Rings} from 'react-loader-spinner'
import UserPresentationComponent from './UserPresentationComponent'

//IS ACTIVE

export type UserPropsType =  mapStateToPropsType & mapDispatchToPropsType


type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsers: number
    currentPage: number
    isLoading: boolean
}
type mapDispatchToPropsType = {
    follow:(userId: string) => void
    unFollow: (userId: string) =>void
    setUsers: (newUsers: Array<UserType>) =>void
    setCurrentPage:(pageNumber: number) => void
    setTotalUsersList:(totalCount: number)=> void
    togglePreloader: (isLoadingBoolean:boolean)=> void
}

const UserComponentContainer = (props: UserPropsType) => {
    React.useEffect(()=>{
        props.togglePreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`).then(response => {
            props.togglePreloader(false)
            props.setUsers(response.data.items);
            props.setTotalUsersList(response.data.totalCount)
            console.log(response.data.items)
        })
    },[])

    const onPageHandler = (pageNumber:number) => {
        props.setCurrentPage(pageNumber);
        props.togglePreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`).then(response => {
            props.togglePreloader(false)
            props.setUsers(response.data.items)
            console.log(response.data.items)
        })
    }
    return (
        <>
            {props.isLoading ? <Rings color="#00BFFF" height={80} width={80}/> :null}
             <UserPresentationComponent totalUsers={props.totalUsers}
             pageSize={props.pageSize}
             currentPage={props.currentPage}
             onPageHandler={onPageHandler}
             follow={props.follow}
             unFollow={props.unFollow}
             users={props.users}
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
        isLoading: state.usersPage.isLoading
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(unFollow(userId))
//         },
//         setUsers: (newUsers: Array<UserType>) => {
//             dispatch(setUsers(newUsers))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPage(pageNumber))
//         },
//         setTotalUsersList: (totalCount) => {
//             dispatch(setTotalUsersList(totalCount))
//         },
//         togglePreloader: (isLoadingBoolean)=>{
//             dispatch(togglePreloader(isLoadingBoolean))
//         }
//     }
// }




    // let pagesOfgUsers = Math.ceil(props.totalUsers / props.pageSize)
    // let pages = []
    // for (let i = 1; i <= pagesOfgUsers; i++) {
    //     pages.push(i)
    // }


    // return (
    //     <>
    //         {props.isLoading ? <Rings color="#00BFFF" height={80} width={80}/>}
    // <UsersPresentation totalUsers={props.totalUsers}
    // pageSize={props.pageSize}
    // currentPage={props.currentPage}
    // onPageHandler={onPageHandler}
    // follow={props.follow}
    // unfollow={props.unfollow}
    // users={props.users}
    // />
    //         </>
    // )

// export default connect(mapStateToProps, mapDispatchToProps)(UsersComponentClasses)
export default connect(mapStateToProps, {follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersList, togglePreloader})(UserComponentContainer)