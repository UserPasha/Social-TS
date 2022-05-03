import c from "./Profile.module.css"
import Posts from "./Posts/Posts";
import {PostType} from "../../Redux/profile-reducer";
import {ActionsTypes} from "../../Redux/stateOfSoc";
import PostsContainer from "./Posts/PostsContainer";
import PostInfo from "./PostInfo";


type ProfilePropsTYpe = {
   /* posts: Array<PostType>
    addPost: (postText: string) => void
    forNewPost: string
    changeForNewPost: (text: string) => void
    dispatch: (action: ActionsTypes) => void*/
}

const Profile = (props: ProfilePropsTYpe) => {


    return (
        <div className={c.profileWrapper}>
            <PostInfo/>
            <PostsContainer/>
        </div>
    );
};
export default Profile;