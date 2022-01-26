import c from "./Post.module.css"
import StateOfSoc from "../../../../Redux/stateOfSoc";
type PostType={
    id: number
    title: string
    likes: number
    src: string
}

const Post = (props: PostType) => {

    return (
        <div className={c.item}>
            <img
                src={props.src}
                alt="avatar"/>
            {props.title}
            <div>
                <span>
                like {props.likes}
                 </span>
            </div>
        </div>
    );
};
export default Post;