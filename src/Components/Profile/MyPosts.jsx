import React from "react";
import styles from './Profile.module.css'
import Post from "./Post";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='newPostText' component='textarea' />
        </div>
        <div className={styles.button}>
            <button>Add post</button>
        </div>
    </form>
}

let AddNewPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm)

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    let newPostElement = React.createRef()

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <h2>My posts</h2>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;