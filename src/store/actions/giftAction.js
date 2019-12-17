import * as actions from './actionTypes';
import { useSelector } from 'react-redux';

export const newGift = (data, deadlineDate ) => {
    return async dispatch => {
        dispatch({ type: actions.GIFT_START });
        try {
            console.log(data);

            let gift = {
                id: 'TTT578HU',
                giftType: data.giftType,
                recipient: data.recipientName,
                title: data.title,
                description: data.description,
                deadlineDate: deadlineDate.toString(),
                targetTabs: data.targetMoney * 100,
                participantsList: [{ name: data.participants[0] }, { name: data.participants[1] }],
                tabDonations: 123,
                myDonations: 10,
                myTargetTabs: 4500,
                owner: true,
                locked: false
            }

            dispatch({ type: actions.NEW_GIFT, payload: gift });


            dispatch({ type: actions.GIFT_SUCCESS })
        } catch (err) {
            dispatch({ type: actions.GIFT_FAIL, payload: err.message })
        }
        dispatch({ type: actions.GIFT_FINISH })


        // await firebase.auth().signOut()
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
}

export const fetchGifts = () => {
    return async dispatch => {
        console.log("Fetching");

        let gifts = [{
            id: 'H48FH0JJ',
            recipient: 'Zé Manel',
            title: 'Presente do Zé Manel',
            description: 'Siga juntar guito para este camelo',
            deadlineDate: 'January 13th 2020',
            targetTabs: 12300,
            participantsList: [{ name: 'Leonardo "Leo" Machado ' }, { name: 'Henrique Lopes Cardoso' }],
            tabDonations: 123,
            myDonations: 10,
            myTargetTabs: 4500,
            owner: true,
            locked: false
        }, {
            id: 'LLKD902JDN',
            recipient: 'Quim das Couves',
            title: 'Presente do Quim Quim',
            description: 'Siga juntar guito para este Pastor',
            deadlineDate: 'March 20th 2020',
            targetTabs: 5000,
            participantsList: [{ name: 'Leonardo "Leo" Machado ' }, { name: 'Henrique Lopes Cardoso' }],
            tabDonations: 677,
            myDonations: 30,
            myTargetTabs: 700,
            owner: false,
            locked: true
        }]

        dispatch({ type: actions.FETCH_GIFTS});

        // await firebase.auth().signOut()
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
}

export const deleteGift = ( giftId) =>{
    return async dispatch => {
        console.log('Delete Gift: ' + giftId);
    }
}