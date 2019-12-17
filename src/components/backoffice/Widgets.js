import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Formik, Form, Field } from 'formik'
import { Container } from 'react-bootstrap';
import { goBack } from 'route-lite';
import { updateWidgets } from '../../store/actions/widgetAction'


export const Widgets = () => {

    const dispatch = useDispatch();

    const widgets = useSelector(state => state.widget)


    return (
        <div>

            <Formik initialValues={{
                clock: widgets.clock,
                date: widgets.date,
                search: widgets.search,
                bookmarks: widgets.bookmarks,
                giftsCalendar: widgets.giftsCalendar,
                background: widgets.background
            }}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(updateWidgets(values))
                    setSubmitting(false);
                    goBack();
                }}
            >
                {({ isSubmitting, isValid }) => (
                    <Form >
                        <div className="widgetInputDiv" >
                            <label className="widgetInputLabel"> Clock</label>
                            <Field className=" bookmarkInputField" type='checkbox' name='clock' />
                        </div>
                        <div className="widgetInputDiv">
                            <label className="widgetInputLabel"> Date</label>
                            <Field className=" bookmarkInputField" type='checkbox' name='date' />
                        </div>
                        <div className="widgetInputDiv">
                            <label className="widgetInputLabel"> Google searchbar</label>
                            <Field className=" bookmarkInputField" type='checkbox' name='search' />
                        </div>
                        <div className="widgetInputDiv">
                            <label className="widgetInputLabel"> Bookmarks </label>
                            <Field className=" bookmarkInputField" type='checkbox' name='bookmarks' />
                        </div>
                        <div className="widgetInputDiv">
                            <label className="widgetInputLabel"> Gifts Calendar </label>
                            <Field className=" bookmarkInputField" type='checkbox' name='giftsCalendar' />
                        </div>
                        <div className="widgetInputDiv">
                            <label className="widgetInputLabel">Background</label>
                            <Field component="select" name="background">
                                <option value="image">Image</option>
                            </Field>
                        </div>
                        <button type="submit">Save</button>
                    </Form>
                )}

            </Formik>

        </div>
    )
}

export default Widgets;
