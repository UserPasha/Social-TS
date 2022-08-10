import React from 'react';
import c from "./Profile.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Rings} from 'react-loader-spinner'
import {ProfileType} from "../../Redux/profile-reducer";
import userPhoto from "../../Common/Images/users.png"
import ProfileStatus from "./ProfileStatus";

type PostInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string)=>void
}

const PostInfo = (props: PostInfoPropsType) => {
    console.log(props)
    if (!props.profile) {
        return <Rings color="#00BFFF" height={80} width={80}/>

    }
    return (
        <div>
            <div className={c.bGImage}>
                <img
                    src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000"
                    alt="background-cover"/>
            </div>
            <div className={c.cover}>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto}
                     alt={"User Avatar"}/>
                <div>
                    <span className={c.name}>{props.profile.fullName}</span>
                </div>
                <div>
                    <span>{props.profile.aboutMe}</span>
                </div>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>


            </div>
        </div>
    );
};

export default PostInfo;