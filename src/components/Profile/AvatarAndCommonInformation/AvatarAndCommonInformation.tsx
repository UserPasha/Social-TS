import React, {FC, memo} from 'react';
import c from './AvatarAndCommonInformation.module.css'
import bgImage from "../../../Common/Images/BgTropical.jpeg";
import userPhoto from "../../../Common/Images/users.png";
import ProfileStatus from "../ProfileStatus";
import {ProfileType} from "../../../Redux/profile-reducer";

type AvatarAndCommonInformationType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    saveAvatar: (image: HTMLImageElement) => void
    saveProfile: (data: any) => void
    isOwner: boolean
}
export const AvatarAndCommonInformation:FC<AvatarAndCommonInformationType> = memo(({
    profile, status, updateStatus, saveProfile, saveAvatar, isOwner
                                                                       }) => {
    // const LoadAvatar = (e: ChangeEvent<HTMLInputElement>)=>{
    const LoadAvatar = (e: any) => {
        if (e.target.files?.length) {
            saveAvatar(e.target.files[0])
        }
        // if(e.target.files.length){
        //     saveAvatar(e.target.files[0])
        // }
    }
    return (
        <>
            <div className={c.bGImage}>
                <img
                    src={bgImage}
                    alt="background-cover"/>
            </div>
            <div className={c.cover}>
                <img src={profile?.photos.large !== null ? profile?.photos.large : userPhoto}
                     alt={"User Avatar"}/>
                <input type='file' onChange={LoadAvatar}/>
                <div>
                    <span className={c.name}>{profile?.fullName}</span>
                </div>
                <div>
                    <span>{profile?.aboutMe}</span>
                </div>

                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </>
    );
});

