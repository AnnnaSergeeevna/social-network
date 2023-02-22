import React from 'react';
import styles from './Profile.module.css';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <img src='Pusheen.gif' />
    }
    return (
        <div>
            <div className={styles.posts}><img src='../../japanesgrdn.png'></img></div>
            <div className={styles.description}>
                <img src={props.profile.photos.large} />
            </div>
            <h3>ava + description</h3>
        </div>
    )
}
export default ProfileInfo;