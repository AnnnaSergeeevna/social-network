import React from 'react';
import ProfileInfo from './ProfileInfo.jsx';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts container.jsx';


const Profile = (props) => {
    
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <div className={styles.myposts}>
                <MyPostsContainer store={props.store}/></div>
        </div>
    )
}
export default Profile;