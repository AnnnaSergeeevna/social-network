import React from 'react';
import ProfileInfo from './ProfileInfo.jsx';
import MyPosts from './MyPosts';
import styles from './Profile.module.css';


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <div className={styles.myposts}><MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText} addPost={props.addPost}/></div>
        </div>
    )
}
export default Profile;