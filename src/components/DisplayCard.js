import React from 'react'
import { Container } from 'react-bootstrap'
import { goBack } from 'route-lite';


const DisplayCard = props => {
    return (
        <div className="accordionOutterDiv">
            <div className="cardTitle">
                <div className="cardTitleInnerDiv" onClick={() => goBack()}>
                    <i class="fas fa-chevron-left"></i>
                </div>
                {props.title}
            </div>
            <div className="cardContent">
                {props.children}
            </div>
        </div>
    );
}

export default DisplayCard;