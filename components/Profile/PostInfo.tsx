import React from 'react';
import c from "./Profile.module.css";

const PostInfo = () => {
    return (
        <div>
            <div className={c.bGImage}>
                <img
                    src="https://www.firestock.ru/download/s/sxjw29bs05hzsxn/photodune-317366.jpg"
                    alt="background-cover"/>
            </div>
            <div className={c.cover}>
                ava+description


            </div>
        </div>
    );
};

export default PostInfo;