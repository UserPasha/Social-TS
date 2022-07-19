import React from 'react';
import Profile from "./Profile";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, userProfileThunkCreator} from "../../Redux/profile-reducer";
import {useParams, Navigate} from "react-router-dom";
import {withRouter} from "../../Common/WithRouterSelf";




export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getUserProfile:(id: string | number) => void
}


const ProfileContainer = (props: ProfilePropsType) => {
    let {id} = useParams();

    React.useEffect(() => {

        if (!id) {
            id = '2'
        }
        props.getUserProfile(id)

    }, [])
    if (!props.isAuth) return <Navigate to="/login" />
    return (
        <Profile {...props} />
    );
};

let mapStateToProps = (state: AppRootStateType):mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


    let WithRouterContainerProfile = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile: userProfileThunkCreator})(WithRouterContainerProfile);