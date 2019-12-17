import React from 'react'

export const CalendarEvent = (props) => {

    var split = props.title.split('_');

    var giftType = split[0]
    var recipient = split[1]

    var icon;

    if(giftType === "Birthday"){
        icon = <i class="fas fa-birthday-cake"></i>

    }else if(giftType === "Christmas"){
        icon = <i class="fas fa-sleigh"></i>
    }else if(giftType === "Because"){
        icon = <i class="fas fa-laugh-beam"></i>
    }else if(giftType === "Valentines"){
        icon = <i class="fas fa-kiss-wink-heart"></i>
    }

    return (
        <div className="eventDiv">
            <p>{icon} {recipient}</p>
        </div>
    )
}

export default CalendarEvent;
