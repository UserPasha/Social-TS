import {Dispatch} from "redux";
import {usersAPI} from "../API/api";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST = "CHANGE-NEW-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"

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
    lookingForAJob:boolean
    lookingForAJobDescription: string
    userId: number
    contacts: contactsType
    photos: photosType
}
export type ProfilePageType = {
    profile: ProfileType | null
    textForPost: string
    posts: Array<PostType>
}

type AddPostActionType ={
    type: "ADD-POST"
    postText: string
}

type ChangeNewPostActionType = ReturnType<typeof changeNewPostAC>
type SetUserProfile = ReturnType<typeof setUserProfile>

export type ProfileActionType = AddPostActionType | ChangeNewPostActionType | SetUserProfile

let initialState:ProfilePageType = {
    profile: null,
    textForPost: "",
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

export const ProfileReducer = (state: ProfilePageType=initialState, action: ProfileActionType)=>{
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 3,
                title: state.textForPost,
                likes: 0,
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
            }
            return {...state,
                textForPost: "",
                posts: [...state.posts, newPost]}
        case CHANGE_NEW_POST:
            return{...state, textForPost: action.text}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}



export const addPostAC = (postText: string):AddPostActionType => {
    return{
        type: "ADD-POST", postText: postText
    }
}

export const changeNewPostAC = (newText: string) =>{
    return{
        type: "CHANGE-NEW-POST", text: newText
    } as const
}
export const setUserProfile = (profile:ProfileType):{ type: "SET_USER_PROFILE", profile:ProfileType} => {
    return {
        type: "SET_USER_PROFILE",
        profile
    }
}

export const userProfileThunkCreator = (id: number | string)=>{
    return (dispatch: Dispatch) => {
        usersAPI.userProfile(id)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}
