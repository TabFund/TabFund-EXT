import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Error from '../messages/Error';
import { useSelector, useDispatch } from 'react-redux';
import { goTo } from 'route-lite';
import LogInForm from './LoginForm';
import { signup } from '../../store/actions/authAction';

import '../../style/authenticationForm_style.css'


const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Please insert your name.'),
    username: Yup.string().required('Please add a username.'),
    email: Yup.string()
        .email('Please enter your email address in format:\nyourname@example.com')
        .required('Please insert you email.'),
    password: Yup.string().required('Please insert your password.').min(8, 'Please insert a passwords with at least 8 characters.')
})


const SignupForm = () => {

    //const isLoading = useSelector(state => state.auth.loading);
    const error = useSelector(state => state.auth.error);

    const dispatch = useDispatch();

    return (
        <div>
            <Formik initialValues={{
                name: '',
                username: '',
                email: '',
                password: ''
            }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    dispatch(signup(values))
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, isValid }) => (
                    <Form className="form">
                        <div className="fieldOutterDiv">
                            <label>Name</label>
                            <Field className="field" type='text' name='name' placeholder='Enter your name' />
                            <div className="errorMessage">
                                <ErrorMessage className="errorMessage" name="name"></ErrorMessage>
                            </div>
                        </div>
                        <div className="fieldOutterDiv">
                            <label>Username</label>
                            <Field className="field" type='text' name='username' placeholder='Enter your username' />
                            <div className="errorMessage">
                                <ErrorMessage className="errorMessage" name="username"></ErrorMessage>
                            </div>
                        </div>
                        <div className="fieldOutterDiv">
                            <label>Email</label>
                            <Field className="field" type='email' name='email' placeholder='Enter email' />
                            <div className="errorMessage">
                                <ErrorMessage className="errorMessage" name="email"></ErrorMessage>
                            </div>
                        </div>
                        <div className="fieldOutterDiv">
                            <label> Password</label>
                            <Field className="field" type='password' name='password' placeholder='Enter password' />
                            <div className="errorMessage">
                                <ErrorMessage className="errorMessage" name="password"></ErrorMessage>
                            </div>
                        </div>

                        <button type="submit" >
                            Sign Up
                        </button>

                    </Form>

                )}
            </Formik>
            {error ?
                <Error>
                    {error}
                </Error>
                :
                null
            }

            <div onClick={() => goTo(LogInForm)}>
                <h4>Already have an account? Log In</h4>
            </div>
        </div>
    )
}

export default SignupForm
