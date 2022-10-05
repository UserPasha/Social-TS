import React, {FC} from 'react';
import c from './ProfileInformation.module.css'
import {ProfileType} from "../../../Redux/profile-reducer";
import {Contacts} from "../Contacts/Contacts";

type ProfileInformationType = {
    profile: ProfileType | null
    isOwner: boolean
    activate: ()=>void
}
export const ProfileInformation:FC<ProfileInformationType> = ({profile, isOwner, activate}) => {
    return (
        <>
            {isOwner&& <div><button onClick={activate}>Edit</button></div>}
            <div>
                <span className={c.request}>About me: </span>
                <span className={c.response}>{profile?.aboutMe}</span>
            </div>
            <div>
                <span className={c.request}>Looking for a job: </span>
                <span className={c.response}>{profile?.lookingForAJob? 'yes': 'no'}</span>
            </div>
            {profile?.lookingForAJob && <div>
                <span className={c.request}>My skills: </span>
                <span className={c.response}>{profile.lookingForAJobDescription}</span>
            </div>}
            <div className={c.contacts}>
                Contacts:
                {/*{Object.keys(profile?.contacts!).map((m:string)=>{*/}
                {/*    return <Contacts key={m} contactTitle={m} contactValue={profile?.contacts[m]}/>*/}
                {/*})}*/}
                <div>
                    <span className={c.request}>Github: </span>
                    <span className={c.response}>{profile?.contacts.github}</span>
                </div>
                <div>
                    <span className={c.request}>Vk: </span>
                    <span className={c.response}>{profile?.contacts.vk}</span>
                </div>
                <div>
                    <span className={c.request}>Facebook: </span>
                    <span className={c.response}>{profile?.contacts.facebook}</span>
                </div>
                <div>
                    <span className={c.request}>Instagram: </span>
                    <span className={c.response}>{profile?.contacts.instagram}</span>
                </div>
                <div>
                    <span className={c.request}>Twitter: </span>
                    <span className={c.response}>{profile?.contacts.twitter}</span>
                </div>
                <div>
                    <span className={c.request}>Website: </span>
                    <span className={c.response}>{profile?.contacts.website}</span>
                </div>
                <div>
                    <span className={c.request}>Youtube: </span>
                    <span className={c.response}>{profile?.contacts.youtube}</span>
                </div>
                <div>
                    <span className={c.request}>Main Link: </span>
                    <span className={c.response}>{profile?.contacts.mainLink}</span>
                </div>
            </div>

        </>
    );
};

