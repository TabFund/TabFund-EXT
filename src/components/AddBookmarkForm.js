import React, { useState, useRef } from 'react'
import { Popover, Overlay } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { addBookmark } from '../store/actions/bookmarkActions';

import ColorPicker from '@vtaits/react-color-picker';

import '@vtaits/react-color-picker/dist/index.css';


const AddBookmarkSchema = Yup.object().shape({
    name: Yup.string().required('* The name is required'),
    url: Yup.string().required('* The url is required')
})

const AddBookmarkForm = () => {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);

    const [target, setTarget] = useState(null);
    const [color, setColor] = useState('#d43557')

    const handleColorChange = (color) => {
        console.log(color);
        
        setColor(color)
    }
    const handleClick = event => {
        setShow(!show);
        setTarget(event.target);
    };

    const handleShowColorPicker = () => {
        setShowColorPicker(!showColorPicker)
    }


    return (
        <div>
            <Overlay
                show={show}
                target={target}
                placement="top" >

                <Popover className="addBookmarkForm">
                    <Popover.Title as="h3">Add Bookmark</Popover.Title>
                    <Popover.Content>
                        <div>
                            <Formik initialValues={{
                                name: '',
                                url: ''
                            }}
                                validationSchema={AddBookmarkSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    setShow(false);
                                    dispatch(addBookmark(values, color))
                                    setSubmitting(false);
                                }}
                            >
                                {({ isSubmitting, isValid }) => (
                                    <Form >
                                        <div className="bookmarkInputDiv" >
                                            
                                            <Field className=" bookmarkInputField" type='name' name='name' placeholder='Ex: Youtube' />
                                            <label> Name</label>
                                            <div className="errorMessage">
                                                <ErrorMessage className="errorMessage" name="name"></ErrorMessage>
                                            </div>
                                        </div>

                                        <div className="bookmarkInputDiv">
                                            <Field className=" bookmarkInputField" type='url' name='url' placeholder='Ex: www.youtube.com' />
                                            <label> Url</label>
                                            <div className="errorMessage">
                                                <ErrorMessage className="errorMessage" name="url"></ErrorMessage>
                                            </div>
                                        </div>
                                        <div className="bookmarkInputDiv">
                                            
                                            <div style={{
                                                background: color,
                                                width: 40,
                                                height: 40,
                                                color: 'white',
                                                marginBottom: 10,
                                                borderRadius: '50%'
                                            }} onClick={handleShowColorPicker}>
                                            </div>
                                            <ColorPicker hidden={showColorPicker ? "" : true} value={color} onDrag={handleColorChange}  saturationWidth={150} saturationHeight={150} hueWidth={25} />
                                        </div>
                                        <button type="submit">Add</button>
                                    </Form>
                                )}

                            </Formik>
                        </div>

                    </Popover.Content>
                </Popover>
            </Overlay>

            <div className="bookmarkOutterDiv" onClick={handleClick}>
                <div className="bookmark" >
                    <i class="far fa-bookmark"></i>
                </div>
            </div>

        </div>

    )
}

export default AddBookmarkForm
