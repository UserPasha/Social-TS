import React from 'react';
import c from "./Profile.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Rings} from 'react-loader-spinner'


type PostInfoPropsType ={
    profile: any
}

const PostInfo = (props: PostInfoPropsType) => {
    if(!props.profile){
        return <Rings color="#00BFFF" height={80} width={80}/>
        console.log(props.profile.name)
    }
    return (
        <div>
            <div className={c.bGImage}>
                <img
                    src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000"
                    alt="background-cover"/>
            </div>
            <div className={c.cover}>
                <img src={props.profile.photos.large} alt={"User Avatar"}/>
                <div>
               <span className={c.name}>{props.profile.fullName}</span>
                </div>
                <div>
                    <span>{props.profile.aboutMe}</span>
                </div>





            </div>
        </div>
    );
};

export default PostInfo;