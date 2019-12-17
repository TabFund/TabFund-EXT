import * as actions from './actionTypes';

export const addBookmark = (data, color) => {
    return async dispatch => {
        console.log(color);
        
        dispatch({type: actions.ADD_BOOKMARK, payload:{name: data.name, url: data.url, color: color}});
        
        // await firebase.auth().signOut()
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
}

export const fetchBookmarks = () =>{
    return async dispatch => {
        console.log("Fetching");
        
        let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        console.log(bookmarks);

        if(!bookmarks){
            bookmarks = localStorage.setItem("bookmarks", JSON.stringify([]));
            console.log(bookmarks);
        }

        dispatch({type: actions.FETCH_BOOKMARK, payload: bookmarks});
 
        // await firebase.auth().signOut()
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
}