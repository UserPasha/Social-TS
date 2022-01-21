import c from "./Posts.module.css"
import Post from "./Post/Post";

const PostData = [
    {title: "Hello!", likes: 10},
    {title: "This is my first post", likes: 15},
]
const PostDataItem = PostData.map(el =>  <Post title={el.title} likes = {el.likes}/>)

const Posts = () => {
    return (
        <div>

            Posts:
            {PostDataItem}
            {/*<Post title={"Hello!"} likes = {10}/>
            <Post title={"This is my first post"} likes = {15}/>*/}

        </div>
    );
};
export default Posts;