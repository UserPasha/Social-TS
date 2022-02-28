//import c from "./Posts.module.css"
import Post from "./Post/Post";
import StateOfSoc from "../../../Redux/stateOfSoc";
//import Profile from "../Profile";
import React, {ChangeEvent} from "react";

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
}

const Posts = (props: PostTypeProps) => {
    let postsMap = StateOfSoc.profilePage.posts.map(el => <Post id={el.id} title={el.title} likes={el.likes}
                                                                src={el.src}/>)

    let addPost = () => {
        props.addPost(props.forNewPost)
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

