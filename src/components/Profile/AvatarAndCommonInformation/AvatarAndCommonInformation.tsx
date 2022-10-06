import React, {FC, memo} from 'react';
import c from './AvatarAndCommonInformation.module.css'
import bgImage from "../../../Common/Images/BgTropical.jpeg";
import userPhoto from "../../../Common/Images/users.png";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import {ProfileType} from "../../../Redux/profile-reducer";

type AvatarAndCommonInformationType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}
export const AvatarAndCommonInformation:FC<AvatarAndCommonInformationType> = memo(({
    profile, status, updateStatus
                                                                       }) => {


    return (
        <>
            <div className={c.cover}>
                <img src={profile?.photos.large !== null ? profile?.photos.large : userPhoto}
                     alt={"User Avatar"}/>

                <div className={c.nameWrapper}>
                    <span className={c.name}>{profile?.fullName}</span>
                </div>


                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </>
    );
});

