import React from 'react';
import axios from "axios";
import Profile from "./Profile";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withRouter} from "../../Common/WithRouterSelf";



export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    profile: ProfileType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}


const ProfileContainer = (props: ProfilePropsType) => {
    let {id} = useParams();

    React.useEffect(() => {

        //let userId = props.match.params.userId
        if (!id) {
            id = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id).then(response => {

            props.setUserProfile(response.data);
            console.log(response.data)
        })
    }, [])

    return (
        <Profile {...props} />
    );
};

let mapStateToProps = (state: AppRootStateType):mapStateToPropsType => ({
    profile: state.profilePage.profile
})


    let WithRouterContainerProfile = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithRouterContainerProfile);