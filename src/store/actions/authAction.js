import * as actions from './actionTypes';

// import firebase from '../../firebase';
// require('firebase/auth')



export const signup = data => {


    // const firestore = getFirestore();

    // try {
    //     const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);

    //     console.log(res);

    // } catch (err) {

    // }

    return async dispatch => {
        dispatch({type: actions.AUTH_START});
        try {
            // const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);

            // console.log(res);
            // await firebase.firestore().collection('users').doc(res.user.uid).set({
            //     firstName: data.firstName,
            //     lastName: data.lastName
            // });

        } catch (err) {
            dispatch({type: actions.AUTH_FAIL, payload: err.message})
        }
        dispatch({type: actions.AUTH_FINISH});
        // await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        //     .then(cred => {
        //         firebase.firestore().collection('users').doc(cred.user.uid).set({
        //             name: data.name
        //         });
        //         dispatch({ type: SIGNUP, user: cred.user })
        //         console.log(cred.user.uid);
        //     }).catch(err => {
        //         console.log(err);
        //     })
    }
}

export const login = data => {
    
    return async dispatch => {
        dispatch({type: actions.AUTH_START});
        try{
            
            //await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
            localStorage.setItem('userToken', 'qwertyuiop');
            dispatch({type: actions.AUTH_SUCCESS});
            
        }catch(err){
            dispatch({type: actions.AUTH_FAIL, payload: err.message})
        }
        dispatch({type: actions.AUTH_FINISH});
    }
}

export const signout = () => {
    localStorage.clear();
    return async dispatch => {
        dispatch({type: actions.AUTH_LOGOUT});
        
        // await firebase.auth().signOut()
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
}