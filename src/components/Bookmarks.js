import React from 'react'
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import AddBookmarkForm from './AddBookmarkForm';

const Bookmarks = () => {

    const bookmarks = useSelector(state => state.bookmark.bookmarks)
    // const newBookmark = useSelector(state => state.bookmark.newBookmark);
    // const bookmarks = localStorage.getItem('bookmarks');
    return (
        <div>
            <Container className="bookmarksContainer">
                {bookmarks ? bookmarks.map(mark =>
                    <div className="bookmarkOutterDiv">
                        <a href={mark.url}>
                            <div className="bookmark" style={{"background-color": mark.color, "border-color" : mark.color}}>
                                {mark.name.charAt(0).toUpperCase()}
                            </div>
                        </a>
                        <p className="bookmarkLabel">{mark.name}</p>
                    </div>
                ) : null}

                <AddBookmarkForm />

            </Container>
        </div>
    )
}

export default Bookmarks
