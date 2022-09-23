import c from "./Profile.module.css"
import PostsContainer from "./Posts/PostsContainer";
import PostInfo from "./PostInfo";
import React, {FC, memo} from "react";
import {ProfilePropsType} from "./ProfileContainer";


const Profile :FC<ProfilePropsType> = memo(({profile, status, updateStatus, ...restProps}) => {


    return (
        <div className={c.profileWrapper}>
            <PostInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <PostsContainer/>
        </div>
    );
});
export default Profile;