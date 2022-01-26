import c from "./Posts.module.css"
import Post from "./Post/Post";
import StateOfSoc from "../../../Redux/stateOfSoc";
import Profile from "../Profile";

type PostType={
    id: number
    title: string
    likes: number
    src: string
}
type PostTypeProps = {
    posts: Array<PostType>
}

const Posts = (props: PostTypeProps) => {
    let postsMap = StateOfSoc.profilePage.posts.map(el =>  <Post id={el.id} title={el.title} likes = {el.likes} src={el.src}/>)
    return (
        <div>

            Posts:
            {postsMap}


        </div>
    );
};
export default Posts;

