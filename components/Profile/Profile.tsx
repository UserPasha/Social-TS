import c from "./Profile.module.css"
import Posts from "./Posts/Posts";
const Profile = () => {
    return (
        <div className={c.profileWrapper}>
            <div className={c.bGImage}>
            <img
                src="https://www.firestock.ru/download/s/sxjw29bs05hzsxn/photodune-317366.jpg"
                alt="background-cover"/>
            </div>
            <div className={c.cover}>
                ava+description
               <Posts/>
            </div>

        </div>
    );
};
export default Profile;