import React from 'react';
import MyPosts from './MyPosts';
import styles from './Profile.module.css';


const Profile = () => {
    return (
        <div>
<div className={styles.posts}><img src='../japanesgrdn.png'></img></div>
<div className={styles.description}>ava + description</div>
<div className={styles.myposts}><MyPosts/></div>
</div>
    )
}
export default Profile;