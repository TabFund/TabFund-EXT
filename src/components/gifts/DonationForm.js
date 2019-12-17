import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Error from '../messages/Error';
import { useSelector, useDispatch } from 'react-redux';

import '../../style/authenticationForm_style.css'


const DonationSchema = Yup.object().shape({
    amount: Yup.number()
        .positive('* The number must be positive')
        .required('* Enter any value')
})

const DonationForm = () => {

    const dispatch = useDispatch();

    return (
        <div >
            <Formik initialValues={{
                amount: 0
            }}
                validationSchema={DonationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    
                    //dispatch(login(values))
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, isValid }) => (
                    <Form className="donationForm">
                        <div className="donationFormFieldOutterDiv">
                            <Field className="donationFormField" type='number' name='amount' placeholder='Ex: 20' />
                            <div className="errorMessage">
                                <ErrorMessage name="amount"></ErrorMessage>
                            </div>
                        </div>
                        <button type="submit"><i class="fas fa-donate"></i></button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default DonationForm
