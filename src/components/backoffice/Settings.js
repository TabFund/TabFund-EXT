import React from 'react'
import Widgets from './Widgets'
import Profile from './Profile';

import DisplayCard from '../DisplayCard';

import { Row, Tab, Col, Nav, Container } from 'react-bootstrap';

import { goBack } from 'route-lite';

export const Settings = () => {
    return (
        <div className="settingsOutterDiv">
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
                            Settings
                        </div>
                        <div className="cardContent">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item className="settingsNavItem">
                                            <Nav.Link eventKey="profile">My Profile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item  className="settingsNavItem">
                                            <Nav.Link eventKey="widgets">Widgets</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="profile">
                                            <Profile />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="widgets">
                                            <Widgets />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                        </div>
                    </div> */}
                    <DisplayCard title="Settings">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item className="settingsNavItem">
                                            <Nav.Link eventKey="profile">My Profile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="settingsNavItem">
                                            <Nav.Link eventKey="widgets">Widgets</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="profile">
                                            <Profile />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="widgets">
                                            <Widgets />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </DisplayCard>
                </Container>
            </div>
        </div>
    )
}

export default Settings;
