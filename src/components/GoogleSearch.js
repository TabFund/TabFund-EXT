import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as googleActions from '../store/actions/googleAction';

import { useDispatch } from 'react-redux';


export const GoogleSearch = () => {

    const dispatch = useDispatch();

    return (
        <div className="googleSearchDiv">
            <i class="fas fa-search searchIcon"></i>
            <Formik initialValues={{
                query: '',
            }}
                onSubmit={(values, { setSubmitting }) => {
                    //dispatch(googleActions.googleSearch(values))
                    window.location = "https://www.google.com/search?q=" + values.query;
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, isValid }) => (
                    <Form className="googleForm">

                        <div className="googleSearchFieldDiv">
                            <Field className="googleField" type='query' name='query' placeholder='Google Search' />
                        </div>

                        {/* <button type="submit">Search</button> */}
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default GoogleSearch