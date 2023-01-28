import React from 'react';
import ProfileInfo from './ProfileInfo.jsx';
import MyPosts from './MyPosts';
import styles from './Profile.module.css';


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <div className={styles.myposts}><MyPosts posts={props.posts}/></div>
        </div>
    )
}
export default Profile;