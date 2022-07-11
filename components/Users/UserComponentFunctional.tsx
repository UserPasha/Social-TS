import React from 'react';
import {UserPropsType} from "./UsersComponentContainer";
import axios from "axios";
import c from './UserComponentFunctional.module.css'
import userPhoto from "../../Common/Images/users.png";

type UserComponentPropsType = {
    onPageHandler: (p: number)=> void
}
export type AllTypesForUserPresentation = UserComponentPropsType & UserPropsType

//IS NOT ACTIVE


const UserComponentFunctional = (props: UserPropsType) => {

    React.useEffect(()=>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`).then(response => {
            props.setUsers(response.data.items);
            props.setTotalUsersList(response.data.totalCount)
        })
    },[])

    const onPageHandler = (pageNumber:number) => {
        props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`).then(response => {
            props.setUsers(response.data.items)
        })
    }

    let pagesOfgUsers = Math.ceil(props.totalUsers / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesOfgUsers; i++) {
        pages.push(i)
    }

    return (
        <div className={c.wrapper}>
            <div className={c.pagesCount}>
                {pages.map(p => <span key={p}
                                      className={props.currentPage === p ? c.selected : ''}
                                      onClick={(e) => {
                                          onPageHandler(p)
                                      }}
                >{p}</span>)}
            </div>
                {
                props.users.map(m => <div key={m.id}>
                    <span>
                        <div>
                            {/*<img src={m.photos!.small !== null ? m.photos.small : userPhoto} alt={'Avatar image'}/>*/}

                            <img src={userPhoto}
                                 alt={'Avatar image'}/>
                        </div>
                        <div>
                            {m.followed
                                ?
                                <button onClick={() => props.unFollow(m.id)}>Follow</button>
                                :
                                <button onClick={() => props.follow(m.id)}>Unfollow</button>}
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

export default UserComponentFunctional;