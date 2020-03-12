import * as actions from './actionTypes';

import firebase from '../../firebase';
require('firebase/auth')



export const signup = data => {

    // const firestore = getFirestore();

    // try {
    //     const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);

    //     console.log(res);

    // } catch (err) {

    // }

    return async dispatch => {
        dispatch({ type: actions.AUTH_START });
        await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then(cred => {
                firebase.firestore().collection('users').doc(cred.user.uid).set({
                    dollars: 0,
                    name: data.name,
                    username: data.username,
                    email: data.email
                });
                console.log(cred.user.uid);
                localStorage.setItem('userToken', cred.user.uid);
                dispatch({ type: actions.AUTH_SUCCESS})
            }).catch(err => {
                console.log(err);
                dispatch({ type: actions.AUTH_FAIL, payload: err.message })
            })
            dispatch({ type: actions.AUTH_FINISH });
    }
}

export const login = data => {

    return async dispatch => {
        dispatch({ type: actions.AUTH_START });
        try {

            await firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(cred => {
                localStorage.setItem('userToken', cred.user.uid);
                console.log("LOGIN SUCCESS");
                
            });
            
            dispatch({ type: actions.AUTH_SUCCESS });

        } catch (err) {
            console.log(err);
            var message;
            if(err.code === "auth/user-not-found"){
                message = "Invalid Email or Password"
            }else{
                message = "Error Ocurred";
            }
            
            dispatch({ type: actions.AUTH_FAIL, payload: message })
        }
        dispatch({ type: actions.AUTH_FINISH });
    }
}

export const signout = () => {
    localStorage.clear();
    return async dispatch => {
        dispatch({ type: actions.AUTH_LOGOUT });

        // await firebase.auth().signOut()
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
}