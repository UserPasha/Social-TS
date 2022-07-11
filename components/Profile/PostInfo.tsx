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
    }
    return (
        <div>
            <div className={c.bGImage}>
                <img
                    src="https://www.firestock.ru/download/s/sxjw29bs05hzsxn/photodune-317366.jpg"
                    alt="background-cover"/>
            </div>
            <div className={c.cover}>
                <img src={props.profile.photos.large} alt={"User Avatar"}/>
               description


            </div>
        </div>
    );
};

export default PostInfo;