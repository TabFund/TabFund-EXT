import React from 'react'
import ApiCalendar from 'react-google-calendar-api';


const GoogleCalendar = () => {

const handleItemClick = (event, name) =>{
    if (name === 'sign-in') {
        ApiCalendar.handleAuthClick();
      } else if (name === 'sign-out') {
        ApiCalendar.handleSignoutClick();
      }

}

    return (
        <div>
            <button
                  onClick={(e) => ApiCalendar.handleAuthClick()}
              >
                sign-in
              </button>
              <button
                  onClick={(e) => handleItemClick(e, 'sign-out')}
              >
                sign-out
              </button>
        </div>
    )
}

export default GoogleCalendar
