import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { getLogin, getLogout } from '../../Redux/AuthReduser';
import { connect } from "react-redux";

const Login = (props) => (
    <div>
        <h1>Login</h1>
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}
            onSubmit={values => {
                 props.getLogin(values.email, values.password , values.rememberMe)
                console.log(values)
            }
            }
        >
            <Form>
                <label htmlFor="email">Login</label>
                <div><Field id="email" name="email" placeholder="email" /></div>
                <div><label htmlFor="password">Password</label></div>
                <div><Field id="password" name="password" placeholder="password" /></div>
                <div><label><Field type="checkbox" name="rememberMe" values="toggle" /> remember me
                </label></div>
                <div><button type="login">Login</button></div>
            </Form>
        </Formik>
    </div>
)
ReactDOM.render(<Login />, document.getElementById('root'));

export default connect(null, {getLogin}) (Login)
