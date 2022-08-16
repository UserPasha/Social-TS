import Post from "./Post/Post";
import React, {ChangeEvent} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import c from "../../Messages/Messages.module.css";

export type Inputs = {
    postFormText: string,
};


export type PostType = {
    id: number
    title: string
    likes: number
    src: string
}
type PostTypeProps = {
    posts: Array<PostType>
    addPost: (data:Inputs) => void
}

const Posts = (props: PostTypeProps) => {

const addPostMessage=(data:Inputs)=>{
    props.addPost(data)
}
    let postsMap = props.posts.map(el => <Post key={el.id}
                                               id={el.id}
                                               title={el.title}
                                               likes={el.likes}
                                               src={el.src}/>)


    return (
        <div>
            <div>
                <PostsForm onSubmit={addPostMessage}/>

            </div>

            Posts:
            {postsMap}


        </div>
    );
};
type PostFormPropsType = {
    onSubmit: (data:Inputs)=> void
}
const PostsForm = (props: PostFormPropsType) => {
    const {register, handleSubmit,  formState: {errors, isValid}} = useForm<Inputs>({
        mode: "onBlur"
    });
   // const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(props.onSubmit)} className={c.form}>

            <textarea {...register("postFormText", {required: "Enter your message",
                minLength: {
                    value: 2,
                    message: "Your message should be more than 2 symbols"
                }})} />
            {errors?.postFormText && <div className={c.error}>
             <span>{errors?.postFormText?.message||"Error"}</span>
            </div>}
            <div>
                <button disabled={!isValid}> Send </button>
            </div>
        </form>
    )
}
export default Posts;

