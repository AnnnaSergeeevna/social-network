import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Field, Form, resetForm } from 'formik'
import { connect } from "react-redux";
import { sendMessageCreator } from '../../Redux/dialogsReduser'
import * as Yup from 'yup'

function validateMessageText(values) {
    let error;
    if (values.length < 10) {
      error = 'Too Long!'
    }
    else return values
  }
const MessageFormik = (props) => (
    <div>
        <Formik
            initialValues={{
                newMessageText: 'max 100 symbols',
            }}
            onSubmit={(values, {resetForm}) => {
                 props.sendMessageCreator(values.newMessageText)
                console.log(values)
                resetForm({values: ''})
            }
            }
        >
            {({ errors, touched }) => (
            <Form>
                <div><Field type="textarea" id="newMessageText" name="newMessageText"validate={validateMessageText}/>
                {touched.username && errors.username && <div>{errors.username}</div>}
                </div>
                <div><button>Send message</button></div>
            </Form>
            )}
        </Formik>
    </div>
)
ReactDOM.render(<MessageFormik />, document.getElementById('root'));

export default connect(null, {sendMessageCreator}) (MessageFormik)