import React from 'react';
import {addPostAC} from "../../../Redux/profile-reducer";
import Posts, {Inputs, PostType} from "./Posts";
import {connect} from "react-redux";
import {AppRootStateType, store} from "../../../Redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    posts: Array<PostType>
}
type mapDispatchToPropsType = {
    addPost: (data:Inputs) => void
}

let mapStateToProps=(state: AppRootStateType):mapStateToPropsType=>{
    return{
        posts: state.profilePage["posts"],
    }
}
let mapDispatchToProps=(dispatch: Dispatch):mapDispatchToPropsType=>{
return{
    addPost:(data:Inputs)=>{
        dispatch(addPostAC(data.postFormText))
    },
}
}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default PostsContainer;