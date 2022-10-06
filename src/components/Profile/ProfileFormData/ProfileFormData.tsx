import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import c from './ProfileFormData.module.css'
import {useForm} from "react-hook-form";
import {ProfileType} from "../../../Redux/profile-reducer";
import {Comment} from "react-loader-spinner";
import {Contacts} from "../Contacts/Contacts";
import {AvatarAndCommonInformation} from "../AvatarAndCommonInformation/AvatarAndCommonInformation";


export type  ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    social: string
}
export type ProfileDataType = {
    // userId: number | string
    contacts: ContactsType

    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string


}

type ProfileFormDataType = {
    onSubmit: (data: any) => void
    profile: ProfileType | null
    saveAvatar: (image: HTMLImageElement) => void
    status: string
    updateStatus: (status: string) => void
}
export const ProfileFormData: FC<ProfileFormDataType> = ({
                                                             onSubmit,
                                                             profile,
                                                             saveAvatar,
                                                             status,
                                                             updateStatus
                                                         }) => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<ProfileDataType>({
        mode: "onBlur",
        defaultValues: {
            fullName: profile?.fullName,
            aboutMe: profile?.aboutMe,
            lookingForAJob: profile?.lookingForAJob,
            lookingForAJobDescription: profile?.lookingForAJobDescription,
            contacts: {
                github: profile?.contacts.github!,
                vk: profile?.contacts.vk!,
                facebook: profile?.contacts.facebook!,
                instagram: profile?.contacts.instagram!,
                twitter: profile?.contacts.twitter!,
                website: profile?.contacts.website!,
                youtube: profile?.contacts.youtube!,
                mainLink: profile?.contacts.mainLink!
            }
        }
    })
    const saveProfileData = (data: ProfileDataType) => {
        onSubmit(data)
    }

    const LoadAvatar = (e: any) => {
        if (e.target.files?.length) {
            saveAvatar(e.target.files[0])
        }
    }
    const URLPattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gm
    return (
        <>
            <AvatarAndCommonInformation profile={profile}
                                        status={status}
                                        updateStatus={updateStatus}
            />
            <div className={c.loadImage}>
                <input type='file' onChange={LoadAvatar}/>
            </div>
            <form onSubmit={handleSubmit(saveProfileData)}>

                <div>
                    <span className={c.request}>Full Name: </span>
                    <span className={c.response}><input {...register('fullName')}
                                                        placeholder={profile?.fullName}/>
             </span>
                </div>
                <div>
                    <span className={c.request}>About me: </span>
                    <span className={c.response}><input {...register('aboutMe')}
                                                        placeholder={profile?.aboutMe}/>
             </span>
                </div>
                <div>
                    <span className={c.request}>Looking for a job: </span>
                    <span className={c.response}><input type={'checkbox'} {...register('lookingForAJob')}/>
             </span>
                </div>
                <div>
                    <span className={c.request}>My skills: </span>
                    <span className={c.response}><input {...register('lookingForAJobDescription')}
                                                        placeholder={profile?.lookingForAJobDescription}/>
             </span>
                </div>

                <div className={c.contacts}>
                    Contacts:

                    <div>
                        <span className={c.request}>Github: </span>
                        <span className={c.response}><input {...register('contacts.github',
                            {pattern: URLPattern})}
                                                            placeholder={profile?.contacts.github!}/>
                 </span>
                    </div>
                    {errors?.contacts?.github?.type === "pattern" && (<div className={c.error}>Invalid URL</div>)}
                    <div>
                        <span className={c.request}>Vk: </span>
                        <span className={c.response}><input {...register('contacts.vk',
                            {pattern: URLPattern})}
                                                            placeholder={profile?.contacts.vk!}/>
                 </span>
                    </div>
                    {errors?.contacts?.vk?.type === "pattern" && (<div className={c.error}>Invalid URL</div>)}
                    <div>
                        <span className={c.request}>Facebook: </span>
                        <span className={c.response}><input {...register('contacts.facebook',
                            {pattern: URLPattern})}
                                                            placeholder={profile?.contacts.facebook!}/>
                 </span>
                    </div>
                    {errors?.contacts?.facebook?.type === "pattern" && (<div className={c.error}>Invalid URL</div>)}
                    <div>
                        <span className={c.request}>Instagram: </span>
                        <span className={c.response}><input {...register('contacts.instagram',
                            {pattern: URLPattern})}
                                                            placeholder={profile?.contacts.instagram!}/>
                 </span>
                    </div>
                    {errors?.contacts?.instagram?.type === "pattern" && (<div className={c.error}>Invalid URL</div>)}
                    <div>
                        <span className={c.request}>Twitter: </span>
                        <span className={c.response}><input {...register('contacts.twitter',
                            {pattern: URLPattern})}
                                                            placeholder={profile?.contacts.twitter!}/>
                 </span>
                    </div>
                    {errors?.contacts?.twitter?.type === "pattern" && (<div className={c.error}>Invalid URL</div>)}
                    <div>
                        <span className={c.request}>Website: </span>
                        <span className={c.response}><input {...register('contacts.website')}
                                                            placeholder={profile?.contacts.website!}/>
                 </span>
                    </div>
                    {errors?.contacts?.website?.type === "pattern" && (<div className={c.error}>Invalid URL</div>)}
                    <div>
                        <span className={c.request}>Youtube: </span>
                        <span className={c.response}><input {...register('contacts.youtube',
                            {pattern: URLPattern})}
                                                            placeholder={profile?.contacts.youtube!}/>
                 </span>
                    </div>
                    {errors?.contacts?.youtube?.type === "pattern" && (<div className={c.error}>Invalid URL</div>)}
                    <div>
                        <span className={c.request}>Main Link: </span>
                        <span className={c.response}><input {...register('contacts.mainLink',
                            {pattern: URLPattern})}
                                                            placeholder={profile?.contacts.mainLink!}/>
                 </span>
                    </div>
                    {errors?.contacts?.mainLink?.type === "pattern" && (<div className={c.error}>Invalid URL</div>)}
                </div>
                <button disabled={!isValid}>save</button>
            </form>
        </>
    );
};

