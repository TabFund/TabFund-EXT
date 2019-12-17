import * as actions from './actionTypes';

export const fetchWidgets = () => {
    return async dispatch => {
        console.log("Fetching Wid");

        let widgets = JSON.parse(localStorage.getItem("widgets"));
        console.log(widgets);

        if (!widgets) {
            widgets = localStorage.setItem("widgets", JSON.stringify(
                {
                    clock: true,
                    date: true,
                    bookmarks: true,
                    search: true,
                    giftsCalendar: true,
                    background: 'image'
                }
            ));
            console.log(widgets);
        }

        dispatch({ type: actions.FETCH_WIDGETS, payload: widgets });

        // await firebase.auth().signOut()
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
}

export const updateWidgets = (data) => {
    return async dispatch => {
        console.log(data);
    
        var widgets = localStorage.setItem("widgets", JSON.stringify(
                {
                    clock: data.clock,
                    date: data.date,
                    bookmarks: data.bookmarks,
                    search: data.search,
                    giftsCalendar: data.giftsCalendar,
                    background: data.background
                }
            ));
          

        dispatch({ type: actions.FETCH_WIDGETS, payload: widgets });

        // await firebase.auth().signOut()
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
}

