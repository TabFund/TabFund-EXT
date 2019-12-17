import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('* Invalid Email Format')
        .required('* The email is Required')
})

export const AddEmailToList = (props) => {
    return (
        <div>

            <Formik initialValues={{
                email: ''
            }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    props.updateList(values);
                    setSubmitting(false);
                    resetForm({})
                }}
            >
                {({ isSubmitting, isValid }) => (
                    <Form className="form " >
                        <div className="addEmailToListForm">
                            <div className="addEmailToListFieldOutterDiv">
                                <Field className="newGiftField addEmailToListInputField" type='email' name='email' placeholder='ex: john@doe.com' />
                            </div>
                            <button type="submit">Add</button>
                        </div>
                        <div className="errorMessage">
                            <ErrorMessage className="errorMessage" name="email"></ErrorMessage>
                        </div>
                    </Form>


                )}

            </Formik>

        </div>
    )
}

export default AddEmailToList;
