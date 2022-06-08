import {v1} from "uuid";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


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
}
type followType = ReturnType<typeof followAC>
type unFollowType = ReturnType<typeof unFollowAC>
type setUsersType = ReturnType<typeof setUsersAC>

type ActionType = followType
    | unFollowType
    | setUsersType

let initialState: initialStateType = {
    users: []
}

export const UsersReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(m => m.id === action.userId ? {...m, followed: true} : m)
            }
        case "UNFOLLOW":
        case UNFOLLOW:
            return {...state, users: state.users.map(m => m.id === action.userId ? {...m, followed: false} : m)}
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.newUsers]}
        default:
            return state
    }
}

export const followAC = (userId: string) => {
    return {
        type: "FOLLOW", userId
    } as const
}
export const unFollowAC = (userId: string) => {
    return {
        type: "UNFOLLOW", userId
    } as const
}
export const setUsersAC = (newUsers: Array<UserType>) => {
    return {
        type: "SET_USERS", newUsers
    } as const
}