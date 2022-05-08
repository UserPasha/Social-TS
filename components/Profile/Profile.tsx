import c from "./Profile.module.css"
import PostsContainer from "./Posts/PostsContainer";
import PostInfo from "./PostInfo";


type ProfilePropsTYpe = {

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