import React from "react";
import styles from './Profile.module.css'
import Post from "./Post";


const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)
let newPostElement = React.createRef()
let addPost =() => {
    props.addPost()
}
let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
}
    return (
        <div>
            <h2>My posts</h2>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}value={props.newPostText}/></div>
                <div className={styles.button}><button onClick={addPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
 
    )
}
export default MyPosts;