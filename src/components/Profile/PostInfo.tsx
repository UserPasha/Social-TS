import React, {FC, memo, ChangeEvent, useState} from 'react';
import c from "./Profile.module.css";
import {ProfileType} from "../../Redux/profile-reducer";
import userPhoto from "../../Common/Images/users.png"
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import bgImage from './../../Common/Images/BgTropical.jpeg'
import {Rings} from "react-loader-spinner";

import {ProfileFormData} from "./ProfileFormData/ProfileFormData";
import {ProfileInformation} from "./ProfileInformation/ProfileInformation";
import {AvatarAndCommonInformation} from "./AvatarAndCommonInformation/AvatarAndCommonInformation";


type PostInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    saveAvatar: (image: HTMLImageElement) => void
    saveProfile: (data: any) => void
    isOwner: boolean
}

const PostInfo: FC<PostInfoPropsType> = memo(({
                                                  profile,
                                                  status,
                                                  updateStatus,
                                                  saveAvatar,
                                                  isOwner,
                                                  saveProfile
                                              }) => {

    const [mode, setMode] = useState<boolean>(false)
    const activate = () => {
        setMode(true)
    }
    const onSubmit = (data: any) => {

        saveProfile(data)
        setMode(false)
    }
    if (!profile) {

        return <Rings color="#FFF" height={80} width={80}/>

    }
    return (
        <div className={c.InfoWrapper}>
            <div className={c.information}>
                {mode ?
                    <ProfileFormData onSubmit={onSubmit}
                                     profile={profile}
                                     saveAvatar={saveAvatar}
                                     status={status}
                                     updateStatus={updateStatus}
                                   />
                    :
                    <ProfileInformation profile={profile}
                                        isOwner={isOwner}
                                        activate={activate}
                                        status={status}
                                        updateStatus={updateStatus}

                    />}
            </div>

        </div>
    );
});

export default PostInfo;