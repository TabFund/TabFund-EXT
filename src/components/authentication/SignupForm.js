import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Error from '../messages/Error';
import { useSelector, useDispatch } from 'react-redux';
import { goTo } from 'route-lite';
import LogInForm from './LoginForm';
//import {signup} from '../../store/actions/authAction';

import '../../style/authenticationForm_style.css'


const LoginSchema = Yup.object().shape({
    firstName: Yup.string().required('* First Name Required'),
    lastName: Yup.string().required('* Last Name Required'),
    email: Yup.string()
        .email('* Invalid Email Format')
        .required('* The email is Required'),
    password: Yup.string().required('* password Required').min(8, 'The password is to short: Minimum 8 characters')
})




const SignupForm = () => {

    // const isLoading = useSelector(state=> state.auth.loading);
    // const error = useSelector(state=>state.auth.error);

    const dispatch = useDispatch();

    return (
        <div>
            <Formik initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    //dispatch(signup(values))
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, isValid }) => (
                    <Form className="form">
                        <div className="fieldOutterDiv">
                            <label>Fist Name</label>
                            <Field className="field" type='firstName' name='firstName' placeholder='Enter your First name' />
                            <div className="errorMessage">
                                <ErrorMessage className="errorMessage" name="firstName"></ErrorMessage>
                            </div>
                        </div>
                        <div className="fieldOutterDiv">
                        <label>Last Name</label>

                            <Field className="field" type='lastName' name='lastName' placeholder='Enter your Last name' />
                            <div className="errorMessage">
                                <ErrorMessage className="errorMessage" name="lastName"></ErrorMessage>
                            </div>
                        </div>
                        <div className="fieldOutterDiv">
                        <label>Email
                        </label>

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
            <Error>
                    Dope
                </Error>
                <div onClick={() => goTo(LogInForm)}>
                <h4>Already have an account? Log In</h4>
            </div>
        </div>
    )
}

export default SignupForm
