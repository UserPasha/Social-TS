import c from "./Post.module.css"
type PostTypeProps = {
    title: string
    likes: number
}
const Post = (props: PostTypeProps) => {
    return (
        <div className={c.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
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