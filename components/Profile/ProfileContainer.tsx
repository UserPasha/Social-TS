import React from 'react';
import Profile from "./Profile";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, userProfileThunkCreator} from "../../Redux/profile-reducer";
import {useParams} from "react-router-dom";
import {withRouter} from "../../Common/WithRouterSelf";
import {WithAuthRedirect} from "../../hoc/withAuthRediresct";
import {compose} from "redux";




export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    profile: ProfileType | null
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
    return (
        <Profile {...props} />
    );
};

let mapStateToProps = (state: AppRootStateType):mapStateToPropsType => ({
    profile: state.profilePage.profile,
})



export default compose <React.ComponentType>(
    connect(mapStateToProps, {getUserProfile: userProfileThunkCreator}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)