import React from 'react';
import Profile from "./Profile";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {
    getProfileStatusThunkCreator,
    ProfileType, saveAvatarThunkCreator, saveProfileThunkCreator,
    updateProfileStatusThunkCreator,
    userProfileThunkCreator
} from "../../Redux/profile-reducer";
import {useParams} from "react-router-dom";
import {withRouter} from "../../Common/WithRouterSelf";
import {WithAuthRedirect} from "../../hoc/withAuthRediresct";
import {compose} from "redux";


export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType & {
    isOwner: boolean
}
type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
    userDataId: number | null
}
type mapDispatchToPropsType = {
    getUserProfile: (id: string | number) => void
    getStatus: (id: string | number) => void
    updateStatus: (status: string) => void
    saveAvatar: (image: HTMLImageElement) => void
    saveProfile: (data: any) => void
}


const ProfileContainer = (props: ProfilePropsType) => {
    let {id} = useParams();
    const refreshProfile = () => {

        if (!id) {
            id = props.userDataId?.toString()
        }
        // @ts-ignore
        props.getUserProfile(id)
        // @ts-ignore
        props.getStatus(id)
    }


    React.useEffect(() => {
        refreshProfile()
    }, [id])

    return (
        <Profile {...props}
                 profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}
                 saveAvatar={props.saveAvatar}
                 saveProfile={props.saveProfile}
                 isOwner={!id}
        />
    );
};

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    profile: state.profilePage["profile"],
    status: state.profilePage["status"],
    userDataId: state.auth.userId
})


export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            getUserProfile: userProfileThunkCreator,
            getStatus: getProfileStatusThunkCreator,
            updateStatus: updateProfileStatusThunkCreator,
            saveAvatar: saveAvatarThunkCreator,
            saveProfile: saveProfileThunkCreator
        }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)