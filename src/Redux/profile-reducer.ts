import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../API/api";
import {initialStateType} from "./users-reducer";
import {AppDispatch} from "./redux-store";

const ADD_POST = "PROFILE/ADD-POST"
const SET_USER_PROFILE = "PROFILE/SET_USER_PROFILE"
const SET_STATUS = "PROFILE/SET_STATUS"
const SAVE_IMAGE = 'PROFILE/SAVE_IMAGE'

export type PostType = {
    id: number
    title: string
    likes: number
    src: string
}
type contactsType = {
    facebook: string | null
    github: string | null
    instagram: string | null
    mainLink: string | null
    twitter: string | null
    vk: string | null
    website: string | null
    youtube: string | null
}
type photosType = {
    large: string | null
    small: string | null
}
export type ProfileType = {
    aboutMe: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    userId: number
    contacts: contactsType
    photos: photosType
}
export type ProfilePageType = {
    profile: ProfileType | null
    posts: Array<PostType>
    status: string
}

type AddPostActionType = {
    type: "PROFILE/ADD-POST"
    postText: string
}


type SetUserProfile = ReturnType<typeof setUserProfile>
type setStatusProfile = ReturnType<typeof setStatus>
type setAvatarProfile = ReturnType<typeof setAvatar>

export type ProfileActionType = AddPostActionType
    | SetUserProfile
    | setStatusProfile
    | setAvatarProfile

let initialState: ProfilePageType = {
    profile: null,
    status: "",
    posts: [

        {
            id: 1,
            title: "Hello!",
            likes: 10,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
        },
        {
            id: 2,
            title: "This is my first post",
            likes: 15,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
        },


    ]
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                title: action.postText,
                likes: 0,
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
            }
            return {
                ...state,
                textForPost: "",
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_IMAGE:
            return { ...state, profile: {...state.profile, photos: action.image }}
        default:
            return state
    }
}


export const addPostAC = (postText: string): AddPostActionType => {
    return {
        type: "PROFILE/ADD-POST", postText: postText
    }
}

export const setUserProfile = (profile: ProfileType): { type: "PROFILE/SET_USER_PROFILE", profile: ProfileType } => {
    return {
        type: "PROFILE/SET_USER_PROFILE",
        profile
    }
}
export const setStatus = (status: string) => {
    return {
        type: "PROFILE/SET_STATUS",
        status
    } as const
}

export const setAvatar = (image: HTMLImageElement) => {
    return {
        type: 'PROFILE/SAVE_IMAGE',
        image
    } as const
}

export const userProfileThunkCreator = (id: number | string) => {
    return async (dispatch: Dispatch) => {
        const response = await usersAPI.userProfile(id)
        dispatch(setUserProfile(response.data));
    }
}
export const getProfileStatusThunkCreator = (id: number | string) => {
    return async (dispatch: Dispatch) => {
        const res = await profileAPI.getStatus(id)
        dispatch(setStatus(res.data))
    }
}
export const updateProfileStatusThunkCreator = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const saveAvatarThunkCreator = (image: HTMLImageElement) => async (dispatch: Dispatch) => {
    const res = await profileAPI.saveImage(image)
    if (res.data.resultCode === 0){
        dispatch(setAvatar(image))
    }
}
export const saveProfileThunkCreator = (data:any) => async (dispatch: AppDispatch, getState: ()=> any) =>{
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfileInfo(data)
    if (response.data.resultCode === 0){
        dispatch(userProfileThunkCreator(userId))
    }
}