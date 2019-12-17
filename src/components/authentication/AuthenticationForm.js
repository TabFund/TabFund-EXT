import React from 'react'
import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';
import Router, { Link, goBack, goTo } from 'route-lite';

import '../../style/authenticationForm_style.css'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const AuthenticationForm = () => {

    return (
        <div className="homeContainer">
            <div className="homeHeader">
                <Container className="authenticationContainer">
                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <div>
                                <LoginForm />
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );

}

export default AuthenticationForm;