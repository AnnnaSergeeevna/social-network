import React from 'react';
import styles from './Profile.module.css';
import Status from './Status';


const ProfileInfo = (props) => {
    return (
        <div className={styles.description}>
            <h3>{props.profile?.fullName}</h3>
            <Status status={props.status} updateStatus={props.updateStatus} />
            <div>
                <img src={props.profile?.photos?.large != null ? props.profile?.photos?.large : '../../post.images.jpeg'} className={styles.usrPhoto} />
            </div>
        </div>
    )
}
export default ProfileInfo;