import * as actions from '../actions/actionTypes';

const initialState = {
    clock: true,
    date: true,
    bookmarks: true,
    search: true,
    giftsCalendar: true,
    background: 'image'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_WIDGETS:
            return {
                clock: action.payload.clock,
                date: action.payload.date,
                bookmarks: action.payload.bookmarks,
                search: action.payload.search,
                giftsCalendar: action.payload.giftsCalendar,
                background: action.payload.background
            }
        default:
            return state
    }

}