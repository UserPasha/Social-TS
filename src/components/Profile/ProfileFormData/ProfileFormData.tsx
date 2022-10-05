import React, {FC} from 'react';
import c from './ProfileFormData.module.css'
import {useForm} from "react-hook-form";
import {ProfileType} from "../../../Redux/profile-reducer";
import {Comment} from "react-loader-spinner";
import {Contacts} from "../Contacts/Contacts";


export type  ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
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
}
export const ProfileFormData: FC<ProfileFormDataType> = ({onSubmit, profile}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<ProfileDataType>({
        mode: "onBlur",
        defaultValues:{
            fullName: profile?.fullName,
            aboutMe: profile?.aboutMe,
            lookingForAJob: profile?.lookingForAJob,
            lookingForAJobDescription: profile?.lookingForAJobDescription,
            contacts:{
                github: profile?.contacts.github!,
                vk: profile?.contacts.vk!,
                facebook: profile?.contacts.facebook!,
                instagram: profile?.contacts.instagram!,
                twitter: profile?.contacts.twitter!,
                website: profile?.contacts.website!,
                youtube: profile?.contacts.youtube!,
                mainLink:  profile?.contacts.mainLink!
            }
        }
    })
    const saveProfileData = (data: ProfileDataType) => {
        onSubmit(data)
    }
    return (
        <form onSubmit={handleSubmit(saveProfileData)}>
            <button>save</button>
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
                    <span className={c.response}><input {...register('contacts.github')}
                                                        placeholder={profile?.contacts.github!}/>
                 </span>
                </div>
                <div>
                    <span className={c.request}>Vk: </span>
                    <span className={c.response}><input {...register('contacts.vk')}
                                                        placeholder={profile?.contacts.vk!}/>
                 </span>
                </div>
                <div>
                    <span className={c.request}>Facebook: </span>
                    <span className={c.response}><input {...register('contacts.facebook')}
                                                        placeholder={profile?.contacts.facebook!}/>
                 </span>
                </div>
                <div>
                    <span className={c.request}>Instagram: </span>
                    <span className={c.response}><input {...register('contacts.instagram')}
                                                        placeholder={profile?.contacts.instagram!}/>
                 </span>
                </div>
                <div>
                    <span className={c.request}>Twitter: </span>
                    <span className={c.response}><input {...register('contacts.twitter')}
                                                        placeholder={profile?.contacts.twitter!}/>
                 </span>
                </div>
                <div>
                    <span className={c.request}>Website: </span>
                    <span className={c.response}><input {...register('contacts.website')}
                                                        placeholder={profile?.contacts.website!}/>
                 </span>
                </div>
                <div>
                    <span className={c.request}>Youtube: </span>
                    <span className={c.response}><input {...register('contacts.youtube')}
                                                        placeholder={profile?.contacts.youtube!}/>
                 </span>
                </div>
                <div>
                    <span className={c.request}>Main Link: </span>
                    <span className={c.response}><input {...register('contacts.mainLink')}
                                                        placeholder={profile?.contacts.mainLink!}/>
                 </span>
                </div>
            </div>

            {/*<input type={'submit'}/>*/}
        </form>
    );
};

