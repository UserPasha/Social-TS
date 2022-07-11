import React from 'react';
import axios from "axios";
import Profile from "./Profile";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
//import {withRouter} from "react-router";

type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    profile: any
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}


const ProfileContainer = (props: ProfilePropsType) => {
    React.useEffect(() => {

        // let userId = props.match.params.userId
        // if (!userId) {
        //     userId = 2
        // }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`).then(response => {
            props.setUserProfile(response.data);
        })
    }, [])

    return (
        <Profile {...props} />
    );
};

let mapStateToProps = (state: AppRootStateType):mapStateToPropsType => ({
    profile: state.profilePage.profile
})


    //let WithRouterContainerProfile = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);