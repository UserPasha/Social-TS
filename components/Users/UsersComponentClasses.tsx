import React, {useState} from 'react';
import c from "./UsersComponentClasses.module.css"
import axios from "axios";
import userPhoto from "../../Common/Images/users.png"
import {UserPropsType} from "./UsersComponentContainer";

//IS NOT ACTIVE

class UsersComponentClasses extends React.Component<UserPropsType> {

    componentDidMount() {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return (

            <div className={c.wrapper}>

                {
                    this.props.users.map(m => <div key={m.id}>
                    <span>
                        <div>
                            {/*<img src={m.photos.small !== null ? m.photos.small : userPhoto} alt={'Avatar image'}/>*/}

                            <img src={userPhoto}
                            alt={'Avatar image'}/>
                        </div>
                        <div>
                            {m.followed
                                ?
                                <button onClick={() => this.props.unFollow(m.id)}>Follow</button>
                                :
                                <button onClick={() => this.props.follow(m.id)}>Unfollow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                        </span>
                        <span>
                            <div>
                                {"m.location.country"}
                            </div>
                            <div>
                                {"m.location.city"}
                            </div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        );
    };
}

export default UsersComponentClasses;