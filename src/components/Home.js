import React, { useEffect } from 'react'
import { goBack, goTo } from 'route-lite';
import { Button } from 'react-bootstrap';
import { signout } from '../store/actions/authAction';
import { fetchBookmarks } from '../store/actions/bookmarkActions';
import { fetchWidgets } from '../store/actions/widgetAction';

import { useSelector, useDispatch } from 'react-redux';
import Clock from 'react-live-clock';
import Bookmarks from './Bookmarks';
import GoogleCalendar from './GoogleCalendar';
import GoogleSearch from './GoogleSearch';
import GiftsCalendar from './GiftsCalendar';
import AllGifts from './gifts/AllGifts';
import Settings from './backoffice/Settings';


const Home = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Efect");
        dispatch(fetchBookmarks());
        dispatch(fetchWidgets());
    }, [dispatch]);

    const date = new Date().toDateString()

    const widgets = useSelector(state => state.widget)
    console.log(widgets);


    return (
        <div className="homePage">
            <div className="clockDiv">
                henrique
                <div className="topBar">
                    <i class="fas fa-cog topBarIcon" onClick={() => goTo(Settings)}></i>
                    <i class="fas fa-sign-out-alt topBarIcon" onClick={() => { dispatch(signout()); }}></i>
                </div>


                <div onClick={() => goTo(AllGifts)}>
                    <i class="fas fa-gift"></i>
                </div>
                {/* <GoogleCalendar /> */}

                {widgets.clock ? <Clock className="clock" ticking="true" /> : null}
                {widgets.date ? <div className="date">{date}</div> : null}
                {widgets.search ? <GoogleSearch /> : null}
                {widgets.bookmarks ? <Bookmarks /> : null}
                {widgets.giftsCalendar ? <GiftsCalendar /> : null}
            </div>
        </div>
    )
}

export default Home
