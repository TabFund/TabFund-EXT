import * as actions from './actionTypes';


const initialState = {
    blocked: false,
    error: null
}

export default (state = initialState, action) => {

    switch (action.type) {
        case actions.CHECK_AD_BLOCKS:
            return {
                ...state,
                blocked: action.payload
            }
        case actions.ADS_FAIL: 
             return {
                 ...state,
                 error: action.payload
             }
        
        default:
            return state
    }

}