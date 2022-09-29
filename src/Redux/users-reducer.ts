import {Dispatch} from "redux";
import {usersAPI} from "../API/api";


const FOLLOW = "USER/FOLLOW"
const UNFOLLOW = "USER/UNFOLLOW"
const SET_USERS = "USER/SET_USERS"
const GET_CURRENT_PAGE = "USER/GET_CURRENT_PAGE"
const SET_TOTAL_USER_LIST = "USER/SET_TOTAL_USER_LIST"
const IS_LOADING = "USER/IS_LOADING"
const REQUEST_TO_FOLLOW = "USER/REQUEST_TO_FOLLOW"


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

export const follow = (userId: string | number): { type: "USER/FOLLOW", userId: string | number } => {
    return {
        type: "USER/FOLLOW", userId
    } as const
}
export const unFollow = (userId: string | number): { type: "USER/UNFOLLOW", userId: string | number } => {
    return {
        type: "USER/UNFOLLOW", userId
    } as const
}
export const setUsers = (newUsers: Array<UserType>): { type: "USER/SET_USERS", newUsers: Array<UserType> } => {
    return {
        type: "USER/SET_USERS", newUsers
    } as const
}
export const setCurrentPage = (currentPage: number): { type: "USER/GET_CURRENT_PAGE", currentPage: number } => {
    return {
        type: "USER/GET_CURRENT_PAGE", currentPage
    } as const
}
export const setTotalUsersList = (totalUserCount: number): { type: "USER/SET_TOTAL_USER_LIST", userList: number } => {
    return {
        type: "USER/SET_TOTAL_USER_LIST", userList: totalUserCount
    } as const
}
export const togglePreloader = (isLoadingBoolean: boolean): { type: "USER/IS_LOADING", isLoadingBoolean: boolean } => {
    return {
        type: "USER/IS_LOADING", isLoadingBoolean
    } as const
}
export const followRequester = (isLoadingBoolean: boolean, id: number | string): { type: "USER/REQUEST_TO_FOLLOW", isLoadingBoolean: boolean, id: number | string } => {
    return {
        type: "USER/REQUEST_TO_FOLLOW", isLoadingBoolean, id
    } as const
}
export const getUsersListThunkCreator = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(togglePreloader(true))
        const data = await usersAPI.getListOfUsers(currentPage, pageSize)
            dispatch(togglePreloader(false))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersList(data.totalCount))

    }
}
export const getCurrentPageThunkCreator = (pageNumber: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(togglePreloader(true))
        const data = await usersAPI.getCurrentPage(pageNumber, pageSize)
            dispatch(togglePreloader(false))
            dispatch(setUsers(data.items))
    }
}
export const unFollowUserThunkCreator = (id: number | string) => {
    return async (dispatch: Dispatch) => {
        dispatch(followRequester(true, id))
        const data = await usersAPI.unfollowUser(id)
            if (data.resultCode === 0) {
                dispatch(unFollow(id))
            }
            dispatch(followRequester(false, id))
    }
}
export const followUserThunkCreator = (id: number | string) => {
    return async (dispatch: Dispatch) => {
        dispatch(followRequester(true, id))

       const data = await  usersAPI.followUser(id)
            if (data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(followRequester(false, id))
    }
}
