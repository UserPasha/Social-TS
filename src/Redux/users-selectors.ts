import {AppRootStateType} from "./redux-store";

export const getUsers = (state: AppRootStateType)=>{
    return state.usersPage.users
}
export const getPaigeSize = (state: AppRootStateType)=>{
    return state.usersPage.pageSize
}
export const getTotalUsers  = (state: AppRootStateType)=>{
    return state.usersPage.totalUsers
}
export const getCurrentPage  = (state: AppRootStateType)=>{
    return state.usersPage.currentPage
}
export const getIsLoading  = (state: AppRootStateType)=>{
    return state.usersPage.isLoading
}
export const getRequestToFollowIdArray  = (state: AppRootStateType)=>{
    return state.usersPage.requestToFollowIdArray
}
