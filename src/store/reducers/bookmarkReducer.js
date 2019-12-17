import * as actions from '../actions/actionTypes';

const initialState = {
    error: null,
    loading: false,
    bookmarks: [],
    newBookmark: false
}

export default (state = initialState, action) => {
    let bookmarks = [];
    let updatedBookmarks = [];
    switch (action.type) {
        case actions.FETCH_BOOKMARK:
        console.log("Reducer");
        console.log(action.payload);

            return {
                ...state,
                newBookmark: false,
                bookmarks: action.payload
            }

        case actions.ADD_BOOKMARK:

            bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
            
            updatedBookmarks =  bookmarks;
            
            updatedBookmarks.push(action.payload);
            localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
            
            return {
                ...state,
                bookmarks: updatedBookmarks,
                newBookmark: true
            }
        default:
            return state
    }

}