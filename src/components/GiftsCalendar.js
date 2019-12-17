import React from 'react'
import { useSelector } from 'react-redux'

import { Calendar, momentLocalizer } from 'react-big-calendar'
// import globalize from 'globalize'

import moment from 'moment'

import "react-big-calendar/lib/css/react-big-calendar.css";
import { goTo } from 'route-lite';

import AllGifts from './gifts/AllGifts';
import CalendarEvent from './CalendarEvent';

export const GiftsCalendar = () => {

    const gifts = useSelector(state => state.gift.gifts)

    const events = [];
    let g = {
        start: null,
        end: null,
        title: ''
    }

    gifts.forEach(gift => {
        console.log(gift);
        
        g.start = gift.deadlineDate
        g.end = gift.deadlineDate
        g.title = gift.giftType + '_' +gift.recipient
        events.push(g)
    });

    const localizer = momentLocalizer(moment)

    return (
        <div>

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                className="giftsCalendar"
                onSelectEvent={() => goTo(AllGifts)}
                components={{
                    event: CalendarEvent
                }}
            // style={{ height: 300, backgroundColor: 'white', fontSize: '14px' }}
            />
        </div>
    )
}

export default GiftsCalendar;
