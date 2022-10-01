import React, {FC, memo, ChangeEvent} from 'react';
import c from "./Profile.module.css";
import {ProfileType} from "../../Redux/profile-reducer";
import userPhoto from "../../Common/Images/users.png"
import ProfileStatus from "./ProfileStatus";
import bgImage from './../../Common/Images/BgTropical.jpeg'
import {Rings} from "react-loader-spinner";






type PostInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string)=>void
    saveAvatar:(image: HTMLImageElement)=> void
}

const PostInfo:FC<PostInfoPropsType> = memo(({profile, status, updateStatus, saveAvatar}) => {
// const LoadAvatar = (e: ChangeEvent<HTMLInputElement>)=>{
    const LoadAvatar = (e: any)=>{
    if(e.target.files?.length){
        saveAvatar(e.target.files[0])
    }
    // if(e.target.files.length){
    //     saveAvatar(e.target.files[0])
    // }
}
    if (!profile) {

        return <Rings color="#FFF" height={80} width={80}/>

    }
    return (
        <div>
            <div className={c.bGImage}>
                <img
                    src={bgImage}
                    alt="background-cover"/>
            </div>
            <div className={c.cover}>
                <img src={profile.photos.large !== null ? profile.photos.large : userPhoto}
                     alt={"User Avatar"}/>
                <input type='file' onChange={LoadAvatar}/>
                <div>
                    <span className={c.name}>{profile.fullName}</span>
                </div>
                <div>
                    <span>{profile.aboutMe}</span>
                </div>

                <ProfileStatus status={status} updateStatus={updateStatus}/>


            </div>
        </div>
    );
});

export default PostInfo;