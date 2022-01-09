import c from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div>

            Posts:
            <Post title={"Hello!"} likes = {10}/>
            <Post title={"This is my first post"} likes = {15}/>

        </div>
    );
};
export default Posts;