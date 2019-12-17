import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import rootReducer from './reducers/rootReducer';

// // react-redux-firebase config
// const rrfConfig = {
//     userProfile: 'users',
//     useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
// }

// const rrfProps = {
//     firebase,
//     config: rrfConfig,
//     dispatch: store.dispatch,
//     createFirestoreInstance // <- needed if using firestore
//   }

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;