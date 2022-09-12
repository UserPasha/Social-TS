import {Dispatch} from "redux";
import {usersAPI} from "../API/api";


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const GET_CURRENT_PAGE = "GET_CURRENT_PAGE"
const SET_TOTAL_USER_LIST = "SET_TOTAL_USER_LIST"
const IS_LOADING = "IS_LOADING"
const REQUEST_TO_FOLLOW = "REQUEST_TO_FOLLOW"


export type LocationType = {
    country: string
    city: string
}
export type UserType = {
    id: string
    photoURL: string
    fullName: string
    followed: boolean
    status: string
    location: LocationType
    name?: string
    photos?: PhotoType
}
export type PhotoType = {
    small: string | null | undefined
    large?: string | null | undefined
}
export type initialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsers: number
    currentPage: number
    isLoading: boolean
    requestToFollowIdArray: Array<number | string>
}
type followType = ReturnType<typeof follow>
type unFollowType = ReturnType<typeof unFollow>
type setUsersType = ReturnType<typeof setUsers>
type getCurrentPageType = ReturnType<typeof setCurrentPage>
type getTotalUserList = ReturnType<typeof setTotalUsersList>
type isLoadingType = ReturnType<typeof togglePreloader>
type followRequesterType = ReturnType<typeof followRequester>

export type UsersActionType = followType
    | unFollowType
    | setUsersType
    | getCurrentPageType
    | getTotalUserList
    | isLoadingType
    | followRequesterType

let initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUsers: 0,
    currentPage: 1,
    isLoading: false,
    requestToFollowIdArray: []
}

export const UsersReducer = (state: initialStateType = initialState, action: UsersActionType): initialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(m => m.id === action.userId ? {...m, followed: true} : m)}
        case UNFOLLOW:
            return {...state, users: state.users.map(m => m.id === action.userId ? {...m, followed: false} : m)}
        case SET_USERS:
            return {...state, users: action.newUsers}
        case GET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_LIST:
            return {...state, totalUsers: action.userList}
        case IS_LOADING:
            return {...state, isLoading: action.isLoadingBoolean}
        case REQUEST_TO_FOLLOW:
            return {
                ...state, requestToFollowIdArray: action.isLoadingBoolean ?
                    [...state.requestToFollowIdArray, action.id]
                    : state.requestToFollowIdArray.filter(f => f !== action.id)
            }

        default:
            return state
    }
}

export const follow = (userId: string | number): { type: "FOLLOW", userId: string | number } => {
    return {
        type: "FOLLOW", userId
    } as const
}
export const unFollow = (userId: string | number): { type: "UNFOLLOW", userId: string | number } => {
    return {
        type: "UNFOLLOW", userId
    } as const
}
export const setUsers = (newUsers: Array<UserType>): { type: "SET_USERS", newUsers: Array<UserType> } => {
    return {
        type: "SET_USERS", newUsers
    } as const
}
export const setCurrentPage = (currentPage: number): { type: "GET_CURRENT_PAGE", currentPage: number } => {
    return {
        type: "GET_CURRENT_PAGE", currentPage
    } as const
}
export const setTotalUsersList = (totalUserCount: number): { type: "SET_TOTAL_USER_LIST", userList: number } => {
    return {
        type: "SET_TOTAL_USER_LIST", userList: totalUserCount
    } as const
}
export const togglePreloader = (isLoadingBoolean: boolean): { type: "IS_LOADING", isLoadingBoolean: boolean } => {
    return {
        type: "IS_LOADING", isLoadingBoolean
    } as const
}
export const followRequester = (isLoadingBoolean: boolean, id: number | string): { type: "REQUEST_TO_FOLLOW", isLoadingBoolean: boolean, id: number | string } => {
    return {
        type: "REQUEST_TO_FOLLOW", isLoadingBoolean, id
    } as const
}
export const getUsersListThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(togglePreloader(true))
        usersAPI.getListOfUsers(currentPage, pageSize).then(data => {
            dispatch(togglePreloader(false))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersList(data.totalCount))
        })
    }
}
export const getCurrentPageThunkCreator = (pageNumber: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(togglePreloader(true))
        usersAPI.getCurrentPage(pageNumber, pageSize).then(data => {
            dispatch(togglePreloader(false))
            dispatch(setUsers(data.items))
        })
    }
}
export const unFollowUserThunkCreator = (id: number | string) => {
    return (dispatch: Dispatch) => {
        dispatch(followRequester(true, id))
        usersAPI.unfollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollow(id))
            }
            dispatch(followRequester(false, id))
        })
    }
}
export const followUserThunkCreator = (id: number | string) => {
    return (dispatch: Dispatch) => {
        dispatch(followRequester(true, id))

        usersAPI.followUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(followRequester(false, id))

        })
    }
}
