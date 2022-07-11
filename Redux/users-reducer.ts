const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const GET_CURRENT_PAGE = "GET_CURRENT_PAGE"
const SET_TOTAL_USER_LIST = "SET_TOTAL_USER_LIST"
const IS_LOADING = "IS_LOADING"


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
    pageSize: number,
    totalUsers: number,
    currentPage: number
    isLoading: boolean
}
type followType = ReturnType<typeof follow>
type unFollowType = ReturnType<typeof unFollow>
type setUsersType = ReturnType<typeof setUsers>
type getCurrentPageType = ReturnType<typeof setCurrentPage>
type getTotalUserList = ReturnType<typeof setTotalUsersList>
type isLoadingType = ReturnType<typeof togglePreloader>

type ActionType = followType
    | unFollowType
    | setUsersType
    | getCurrentPageType
    | getTotalUserList
    | isLoadingType

let initialState: initialStateType = {
    users: [],
    pageSize: 15,
    totalUsers: 0,
    currentPage: 1,
    isLoading: false
}

export const UsersReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(m => m.id === action.userId ? {...m, followed: true} : m)
            }
        case UNFOLLOW:
            return {...state, users: state.users.map(m => m.id === action.userId ? {...m, followed: false} : m)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.newUsers]}
        case GET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_LIST:
            return {...state, totalUsers: action.userList}
        case IS_LOADING:
            return {...state, isLoading: action.isLoadingBoolean}
        default:
            return state
    }
}

export const follow = (userId: string): { type: "FOLLOW", userId: string } => {
    return {
        type: "FOLLOW", userId
    } as const
}
export const unFollow = (userId: string): { type: "UNFOLLOW", userId: string } => {
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
    }
}