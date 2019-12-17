import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Accordion, Card } from 'react-bootstrap';

import * as giftActions from '../../store/actions/giftAction';

import { useSelector, useDispatch } from 'react-redux';
import DeleteModal from '../DeleteModal';
import DonationForm from './DonationForm';
import AddGift from './AddGift';
import { goBack, goTo } from 'route-lite';

import DisplayCard from '../DisplayCard';

export const AllGifts = () => {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [recipient, setRecipient] = useState("");
    const [giftId, setGiftId] = useState();


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const gifts = useSelector(state => state.gift.gifts);


    useEffect(() => {
        dispatch(giftActions.fetchGifts());
    }, [dispatch]);


    const handleDelete = () => {
        console.log();
        dispatch(giftActions.deleteGift(giftId));
        handleClose();
    }
    console.log(gifts);

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
                        All Gifts
                            <i onClick={() => goTo(AddGift)} class="fas fa-plus-circle addGiftIcon"></i>
                    </div> */}

                <DisplayCard title="All Gifts">
                <i onClick={() => goTo(AddGift)} class="fas fa-plus-circle addGiftIcon"></i>
                    <Accordion>
                        {
                            gifts.length !== 0 ? gifts.map(doc =>

                                <div key={doc.id} className="giftsItem">
                                    <Card>
                                        <Row>
                                            <Col md={2} >
                                                <div>
                                                    <b>Recipient</b>
                                                    <p>{doc.recipient}</p>
                                                </div>
                                            </Col>
                                            <Col md={2}>
                                                <div>
                                                    <b>Deadline Date</b>
                                                    <p>{doc.deadlineDate}</p>
                                                </div>
                                            </Col>
                                            <Col md={2}>
                                                <div>
                                                    <b>My Contribution</b>
                                                    <p>{doc.myDonations}/{doc.myTargetTabs}</p>
                                                </div>
                                            </Col>
                                            <Col md={3}>
                                                <div>
                                                    <b>Contribute Now</b>
                                                    <DonationForm />
                                                </div>
                                            </Col>
                                            <Col md={3} className="orderButtonsCol">
                                                <Accordion.Toggle as={Button} variant="info" eventKey={doc.id}>
                                                    Details
                                            </Accordion.Toggle>
                                                {doc.owner ?
                                                    <div>
                                                        <a className="deleteIcon btn btn-danger" href="##" aria-label="Delete" onClick={() => {
                                                            // setOrderId(doc.id);
                                                            setGiftId(doc.id)
                                                            setRecipient(doc.recipient);
                                                            handleShow(doc.recipient);
                                                        }}>
                                                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                        </a>
                                                        <a className="deleteIcon btn btn-secondary" href="##" aria-label="Delete" onClick={() => {
                                                            // setOrderId(doc.id);
                                                        }}>
                                                            <i class="fas fa-pen"></i>
                                                        </a>
                                                    </div>
                                                    : null}
                                            </Col>
                                        </Row>
                                        <Accordion.Collapse eventKey={doc.id}>
                                            <Card.Body>
                                                <Row>
                                                    <Col>
                                                        <div>
                                                            <b>Gift Type</b>
                                                            <p>{doc.giftType}</p>
                                                        </div>
                                                    </Col>
                                                    <Col>
                                                        <div>
                                                            <b>Title</b>
                                                            <p>{doc.title}</p>
                                                        </div>
                                                    </Col>

                                                    <Col>
                                                        <div>
                                                            <b>Description</b>
                                                            <p>{doc.description}</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <div>
                                                            <b>Participants</b>
                                                            {doc.participantsList.map(par =>
                                                                <p>{par.name}</p>
                                                            )}
                                                        </div>
                                                    </Col>
                                                    <Col>
                                                        <div>
                                                            <b>Contributions Progress</b>
                                                            <p>{doc.tabDonations} / {doc.targetTabs}</p>
                                                        </div>
                                                    </Col>
                                                </Row>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </div>


                            ) :
                                <div className="ordersItem">
                                    <Card>
                                        <h3>You're not contributing to any Gift! Create one and invite friends!</h3>
                                    </Card>
                                </div>
                        }
                    </Accordion>
                </DisplayCard>
                {/* </div> */}
                <DeleteModal show={show} handleClose={handleClose} handleDelete={handleDelete} recipient={recipient} />
            </Container>
        </div>
    )
}

export default AllGifts;
