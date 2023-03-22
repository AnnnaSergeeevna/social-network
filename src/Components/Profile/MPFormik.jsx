import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, resetForm } from 'formik';
import { connect } from "react-redux";
import { addPostActionCreator } from '../../Redux/profileReduser'
import * as Yup from 'yup'

const MPFormik = (props) => (
    <div>
        <Formik
            initialValues={{
                newPostText: '',
            }}
            onSubmit={(values, {resetForm}) => {
                 props.addPostActionCreator(values.newPostText)
                console.log(values)
                resetForm({values: ''})
            }
            }
        >
            <Form>
                <div><Field type="textarea" id="newPostText" name="newPostText" case='input'/></div>
                <div><button>Add Post</button></div>
            </Form>
        </Formik>
    </div>
)
ReactDOM.render(<MPFormik />, document.getElementById('root'));

export default connect(null, {addPostActionCreator}) (MPFormik)