import React from 'react';
import StoreContext from "../../../Redux/storeContext";
import {addPostAC, changeNewPostAC} from "../../../Redux/profile-reducer";
import Posts from "./Posts";

type PostsContainerPropsType ={

}

const PostsContainer = (props: PostsContainerPropsType) => {
    return (
     <StoreContext.Consumer>
         {store=> {
             let state = store.getState()
             let addPost = ()=>{
                 store.dispatch(addPostAC(state.profilePage.textForPost))
             }
             let changeNewPost = (text: string)=>{
                 let action = changeNewPostAC(text)
                 store.dispatch(action)
             }
             return<Posts posts={state.profilePage.posts}
                          addPost={addPost}
                          forNewPost={state.profilePage.textForPost}
                          changeForNewPost={changeNewPost}/>
         }

         }
     </StoreContext.Consumer>
    );
};

export default PostsContainer;