import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Field, Form, resetForm } from 'formik'
import { getLogin } from '../../Redux/AuthReduser'
import { connect } from "react-redux"
import * as Yup from 'yup'


const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'password must contain 8 or more characters')
        .lowercase(1, 'password must contain at least 1 lower case letter')
})
export const Login = (props) => (
    <div>
        <h1>Login</h1>
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
                props.getLogin(values.email, values.password, values.rememberMe)
                console.log(values)
            }
            }
        >
            {({ errors, touched }) => (
                <Form>
                    <label htmlFor="email">Login</label>
                    <div>
                        <Field id="email" name="email" placeholder="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    </div>
                    <div><label htmlFor="password">Password</label></div>
                    <Field id="password" name="password" placeholder="password" />
                    {errors.password && touched.password ? (<div>{errors.password}
                    </div>) : null}
                    <div><label><Field type="checkbox" name="rememberMe" values="toggle" /> remember me
                    </label></div>
                    <div><button type="submit">Login</button></div>
                </Form>
            )}
        </Formik>
    </div>
)
ReactDOM.render(<Login />, document.getElementById('root'));

export default connect(null, { getLogin })(Login)
