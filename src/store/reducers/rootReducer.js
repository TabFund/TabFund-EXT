import {combineReducers} from 'redux';
import authReducer from './authReducer';
import bookmarkReducer from './bookmarkReducer';
import giftReducer from './giftReducer';
import widgetReducer from './widgetReducer';


export default combineReducers({
    auth: authReducer,
    bookmark: bookmarkReducer,
    gift: giftReducer,
    widget: widgetReducer
})