import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Error from '../messages/Error';
import { useSelector, useDispatch } from 'react-redux';
import { goTo } from 'route-lite';
import SignupForm from './SignupForm';

import { login } from '../../store/actions/authAction';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import '../../style/authenticationForm_style.css'


const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('* Invalid Email Format')
        .required('* The email is Required'),
    password: Yup.string().required('* password Required')
})


const LoginForm = (props) => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    const responseFacebook = (response) => {
        console.log(response);
    }

    const isLoading = useSelector(state => state.auth.loading);
    const error = useSelector(state => state.auth.error);

    const dispatch = useDispatch();

    return (
        <div >
            {/* <GoogleLogin
                clientId="1098258242299-ln60f3esoh4ua8paqq2aq4t67h9it0uj.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}/>
            <FacebookLogin
                appId="2462365480700243"
                autoLoad={true}
                fields="name,email"
                callback={responseFacebook} /> */}
            <Formik initialValues={{
                email: '',
                password: ''
            }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(login(values))
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, isValid }) => (
                    <Form className="form">
                        <div className="fieldOutterDiv">
                            <label> Email</label>
                            <Field className="field" type='email' name='email' placeholder='Enter email' />
                            <div className="errorMessage">
                                <ErrorMessage name="email"></ErrorMessage>
                            </div>
                        </div>

                        <div className="fieldOutterDiv">
                            <label> Password</label>
                            <Field className="field" type='password' name='password' placeholder='Enter password' />
                            <div className="errorMessage">
                                <ErrorMessage className="errorMessage" name="password"></ErrorMessage>
                            </div>
                        </div>

                        <button type="submit">Log In</button>
                    </Form>
                )}

            </Formik>

            <div onClick={() => goTo(SignupForm)}>
                <h4>Sign Up</h4>
            </div>
        </div>
    )
}

export default LoginForm
