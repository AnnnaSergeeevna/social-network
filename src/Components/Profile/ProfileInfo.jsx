import React from 'react';
import styles from './Profile.module.css';


const ProfileInfo = (props) => {
    if (!props.profile?.photos.large) {
        return <div className={styles.description}><img src='../../post.images.jpeg'></img></div>
    }
    return (
        <div>
            {/* <div className={styles.posts}><img src='../../japanesgrdn.png'></img></div> */}
            <div className={styles.description}>
                <img src={props.profile.photos.large} />
            </div>
            <h3>ava + description</h3>
        </div>
    )
}
export default ProfileInfo;