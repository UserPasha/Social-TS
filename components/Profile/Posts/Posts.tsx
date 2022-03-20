
import Post from "./Post/Post";
import React, {ChangeEvent} from "react";
import {ActionsTypes, addPostAC} from "../../../Redux/stateOfSoc";

type PostType = {
    id: number
    title: string
    likes: number
    src: string
}
type PostTypeProps = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    forNewPost: string
    changeForNewPost: (text: string) => void
    dispatch: (action: ActionsTypes) => void
}

const Posts = (props: PostTypeProps) => {
    let postsMap = props.posts.map(el => <Post id={el.id} title={el.title} likes={el.likes}
                                                                src={el.src}/>)

    let addPost = () => {
       // props.addPost(props.forNewPost)
        props.dispatch(addPostAC(props.forNewPost))
    }
    const newPostCallbackHandler = (e: ChangeEvent<HTMLTextAreaElement>)=>{
            props.changeForNewPost(e.currentTarget.value)
    }
    // let addPost = () => {
    //    props.addPost(postRef.current?.value ? postRef.current.value: "---" )
    // }
    return (
        <div>
            <div>
                <textarea value={props.forNewPost}
                          onChange={newPostCallbackHandler}></textarea>
            </div>
            <div>
                <button onClick={addPost}>ADD</button>
            </div>
            Posts:
            {postsMap}


        </div>
    );
};
export default Posts;

