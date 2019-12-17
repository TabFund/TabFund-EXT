import React, { useState } from 'react'
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { goBack, goTo } from 'route-lite';

import { useSelector, useDispatch } from 'react-redux';

import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup'

import { newGift } from '../../store/actions/giftAction';

import AddEmailToList from './AddEmailToList';

import DisplayCard from '../DisplayCard';

import Error from '../messages/Error';
import { addDays } from 'date-fns';

const LoginSchema = Yup.object().shape({
    recipientName: Yup.string().required('* Recipient\'s Name Required'),
    recipientEmail: Yup.string().email('* Invalid Email Format').required('* Recipient\'s Email Required'),
    title: Yup.string().required('* The title is Required'),
    description: Yup.string(),
    // participants: Yup.array().min(1, 'Add at least one person'),
    giftType: Yup.string().required('* Gift type required'),
    targetMoney: Yup.number().positive('* This value has to be positive').min(10, '* Don\'t be cheap, give a minimum of 10$').integer('* Insert a round number (i.e. no decimal point)').required('* Don\'t be cheap, give a minimum of 10$')
})
export const AddGift = () => {

    const isLoading = useSelector(state => state.gift.loading);
    const error = useSelector(state => state.gift.error);
    const success = useSelector(state => state.gift.success);


    const [deadlineDate, setDeadlineDate] = useState(addDays(new Date(), 1));
    const [other, setOther] = useState();
    const dispatch = useDispatch();

    return (
        <div className="allGiftsPage">
            {/* <div className="navBar">
                <Container className="navBarContainer" onClick={() => goBack()}><i class="fas fa-chevron-left"></i></Container>
            </div> */}

            <Container className="ordersListContainer">

                {/* <div className="accordionOutterDiv">
                    <div className="cardTitle">
                        <div className="cardTitleInnerDiv" onClick={() => goBack()}>
                            <i class="fas fa-chevron-left"></i>
                        </div>
                        New Gift
                    </div> */}
                    <DisplayCard title="New gift">

                    <Formik initialValues={{
                        giftType: '',
                        recipientName: '',
                        recipientEmail: '',
                        title: '',
                        description: '',
                        targetMoney: 0,
                        participants: []
                    }}
                        validationSchema={LoginSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);
                            dispatch(newGift(values, deadlineDate))
                            setSubmitting(false);
                            goBack();
                        }}
                    >
                        {({ isSubmitting, isValid, handleChange, values }) => (
                            <Form className="newGiftForm" >
                                <div className="newGiftFieldOutterDiv">
                                    <label className="formLabel">Gift Type</label>
                                    <Field component="select" name="giftType">
                                        <option value="">Choose a type...</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Christmas">Christmas</option>
                                        <option value="Because">Because I like You</option>
                                        <option value="Anniversary">Anniversary</option>
                                        <option value="Valentines">Valentines</option>
                                        <option value="Farewell">Farewell</option>
                                    </Field>
                                    <div className="errorMessage">
                                        <ErrorMessage className="errorMessage" name="giftType"></ErrorMessage>
                                    </div>
                                </div>
                                <div className="newGiftFieldOutterDiv">
                                    <label className="formLabel">Recipient's Name *</label>
                                    <Field className="newGiftField" type='recipientName' name='recipientName' placeholder="Enter the recipient's name" />
                                    <div className="errorMessage">
                                        <ErrorMessage className="errorMessage" name="recipientName"></ErrorMessage>
                                    </div>
                                </div>
                                <div className="newGiftFieldOutterDiv">
                                    <label className="formLabel">Recipient's Email *</label>
                                    <Field className="newGiftField" type='email' name='recipientEmail' placeholder="Enter the recipient's email" />
                                    <div className="errorMessage">
                                        <ErrorMessage className="errorMessage" name="recipientEmail"></ErrorMessage>
                                    </div>
                                </div>
                                <div className="newGiftFieldOutterDiv">
                                    <label className="formLabel">Title *</label>
                                    <Field className="newGiftField" type='title' name='title' placeholder='Add a title to the Gift' />
                                    <div className="errorMessage">
                                        <ErrorMessage className="errorMessage" name="title"></ErrorMessage>
                                    </div>
                                </div>
                                <div className="newGiftFieldOutterDiv">
                                    <label className="formLabel">Description </label>
                                    <Field className="newGiftField" type='description' name='description' placeholder='Add a description to the gift' />
                                    <div className="errorMessage">
                                        <ErrorMessage className="errorMessage" name="description"></ErrorMessage>
                                    </div>
                                </div>
                                <div className="newGiftFieldOutterDiv">
                                    <label className="formLabel"> Deadline Date</label>
                                    <DatePicker minDate={addDays(new Date(), 1)} selected={deadlineDate} onChange={date => setDeadlineDate(date)} />

                                </div>
                                <div className="newGiftFieldOutterDiv">
                                    <label className="formLabel"> How much money would you like to raise?</label>
                                    <div className="newGiftField">
                                        <Field type='number' name="targetMoney" placeholder="0" id="targetMoney" onChange={handleChange} /> <label>$ 
                                        <OverlayTrigger
                                                key="right"
                                                placement="right"
                                                overlay={
                                                    <Tooltip>
                                                        1 Tab = 0.01$ - We can't have "half tabs", so you can only insert round values!
                                                    </Tooltip>
                                                }
                                            >
                                                <i class="fas fa-info-circle moneyInfoIcon"></i>
                                            </OverlayTrigger>
                                        </label>
                                        <p>= {values.targetMoney ? values.targetMoney * 100 : 0} Tabs</p>
                                    </div>
                                    <div className="errorMessage">
                                        <ErrorMessage className="errorMessage" name="targetMoney"></ErrorMessage>
                                    </div>
                                </div>
                                <div className="newGiftFieldOutterDiv">
                                    <label className="formLabel"> Invite people to this Gift!</label>
                                        <FieldArray
                                            name="participants"
                                            render={arrayHelpers => (
                                                <div>
                                                    {values.participants.map((participant, index) => (
                                                        <div key={index}>
                                                            <Field name={`participants[${index}]`} />
                                                            <button
                                                                type="button"
                                                                onClick={() => arrayHelpers.remove(index)}
                                                            >
                                                                -
                                                            </button>
                                                        </div>
                                                    ))}
                                                    {/* <button
                                                        type="button"
                                                        onClick={() => arrayHelpers.push('')}
                                                    >
                                                        +
                                                    </button> */}
                                                    <AddEmailToList updateList={(data) => arrayHelpers.push(data.email)} />
                                                </div>
                                            )}
                                        />
                                    <div className="errorMessage">
                                        <ErrorMessage className="errorMessage" name="participants"></ErrorMessage>
                                    </div>
                                </div>


                                <button type="submit" disabled={isLoading}>
                                    Create
                                </button>

                            </Form>

                        )}

                    </Formik>
                    <Error>
                        {error}
                    </Error>

                    </DisplayCard>
                {/* </div> */}

            </Container>
        </div>
    )
}

export default AddGift;