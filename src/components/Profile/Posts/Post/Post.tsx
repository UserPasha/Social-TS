import c from "./Post.module.css"
import hearts from './../../../../Common/Images/hearts.png'

type PostType = {
    id: number
    title: string
    likes: number
    src: string
}

const Post = (props: PostType) => {

    return (
        <>
            <div className={c.item}>
                <img
                    src={props.src}
                    alt="avatar"/>
                <p>{props.title}</p>

            </div>
            <div className={c.likes}>
                <img src={hearts}/>
                <div className={c.likesCount}>{props.likes}</div>

            </div>
        </>
    );
};
export default Post;