import Post from "./Post/Post";
import React, {ChangeEvent} from "react";
import {ActionsTypes} from "../../../Redux/stateOfSoc";
import {addPostAC} from "../../../Redux/profile-reducer";

export type PostType = {
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
}

const Posts = (props: PostTypeProps) => {
    let postsMap = props.posts.map(el => <Post id={el.id}
                                               title={el.title}
                                               likes={el.likes}
                                               src={el.src}/>)

    let addPost = () => {
        props.addPost(props.forNewPost)

    }
    const newPostCallbackHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeForNewPost(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                <textarea value={props.forNewPost}
                          onChange={newPostCallbackHandler}/>
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

