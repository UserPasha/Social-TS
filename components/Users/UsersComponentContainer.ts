import {connect} from "react-redux";
import UsersComponent from "./UsersComponent";
import {followAC, initialStateType, setUsersAC, unFollowAC, UserType} from "../../Redux/users-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import UsersComponentClasses from "./UsersComponentClasses";


type mapStateToPropsType = {
    //usersPage: initialStateType
    users: Array<UserType>
}
type mapDispatchToPropsType = {
    follow:(userId: string) => void
    unfollow: (userId: string) =>void
    setUsers: (newUsers: Array<UserType>) =>void
}

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        //usersPage: state.usersPage
        users: state.usersPage.users
    }
}
export type UserPropsType =  mapStateToPropsType & mapDispatchToPropsType

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (newUsers: Array<UserType>) => {
            dispatch(setUsersAC(newUsers))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent)