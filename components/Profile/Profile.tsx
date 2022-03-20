import c from "./Profile.module.css"
import Posts from "./Posts/Posts";

import {ActionsTypes, PostType} from "../../Redux/stateOfSoc";
type ProfilePropsTYpe = {
    posts: Array<PostType>
    addPost: (postText: string)=> void
    forNewPost:string
    changeForNewPost: (text: string)=> void
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsTYpe) => {


    return (
        <div className={c.profileWrapper}>
            <div className={c.bGImage}>
            <img
                src="https://www.firestock.ru/download/s/sxjw29bs05hzsxn/photodune-317366.jpg"
                alt="background-cover"/>
            </div>
            <div className={c.cover}>
                ava+description
                <Posts posts={props.posts}
                       addPost={props.addPost}
                       forNewPost={props.forNewPost}
                       changeForNewPost={props.changeForNewPost}
                       dispatch={props.dispatch}
                />
            </div>

        </div>
    );
};
export default Profile;