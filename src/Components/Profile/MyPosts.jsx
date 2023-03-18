import React from "react";
import ReactDOM from 'react-dom';
import styles from './Profile.module.css'
import Post from "./Post";
import { Formik, Field, Form } from 'formik';
import { addPostActionCreator } from "../../Redux/profileReduser";


const MyPosts = () => (
    <div>
        {/* <h2>My posts</h2> */}
            <Formik
            initialValues={{
                newPostText: ''
            }}
            onSubmit={values => {
                addPostActionCreator(values)
              }}>
        <Form>
        <div>
<label htmlFor="myPosts">My posts</label>
</div>
<div>
<Field id="myPosts" name="myPosts" placeholder='' /></div>
<div>
<button type="addPost">Add post</button></div>
  </Form>
  </Formik>
  </div>
)
ReactDOM.render(<MyPosts />, document.getElementById('root'));

export default MyPosts