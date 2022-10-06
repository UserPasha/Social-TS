import c from "./Profile.module.css"
import PostsContainer from "./Posts/PostsContainer";
import PostInfo from "./PostInfo";
import React, {FC, memo} from "react";
import {ProfilePropsType} from "./ProfileContainer";


const Profile: FC<ProfilePropsType> = memo((
    {
        profile,
        status,
        updateStatus,
        saveAvatar,
        saveProfile,
        isOwner,
        ...restProps
    }) => {


    return (
        <div className={c.profileWrapper}>
            <PostInfo profile={profile}
                      status={status}
                      updateStatus={updateStatus}
                      saveAvatar={saveAvatar}
                      saveProfile={saveProfile}
                      isOwner={isOwner}
                     />
            <PostsContainer/>
        </div>
    );
});
export default Profile;