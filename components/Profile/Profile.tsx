import c from "./Profile.module.css"
import PostsContainer from "./Posts/PostsContainer";
import PostInfo from "./PostInfo";
import React from "react";
import {ProfilePropsType} from "./ProfileContainer";


const Profile = (props: ProfilePropsType) => {


    return (
        <div className={c.profileWrapper}>
            <PostInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer/>
        </div>
    );
};
export default Profile;