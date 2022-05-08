import React from 'react';
import StoreContext from "../../../Redux/storeContext";
import {addPostAC, changeNewPostAC} from "../../../Redux/profile-reducer";
import Posts, {PostType} from "./Posts";
import {connect} from "react-redux";
import {AppRootStateType, store} from "../../../Redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    posts: Array<PostType>
    forNewPost: string
}
type mapDispatchToPropsType = {
    addPost: (message: string) => void
    changeForNewPost: (post: string) => void
}

let mapStateToProps=(state: AppRootStateType):mapStateToPropsType=>{
    return{
        posts: state.profilePage.posts,
        forNewPost: state.profilePage.textForPost
    }
}
let mapDispatchToProps=(dispatch: Dispatch):mapDispatchToPropsType=>{
return{
    addPost:(post: string)=>{
        dispatch(addPostAC(post))
    },
    changeForNewPost:(text: string)=>{
        dispatch(changeNewPostAC(text))
    }
}
}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default PostsContainer;