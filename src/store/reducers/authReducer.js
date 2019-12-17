import * as actions from '../actions/actionTypes';

const initialState = {
    error: null,
    loading: false,
    logged: false
}

export default (state = initialState, action) => {

    switch (action.type) {
        case actions.AUTH_START:
            return {
                ...state,
                error: null,
                loading: true,
                logged: false
            }
        case actions.AUTH_FINISH:
            return {
                ...state,
                loading: false
            }
        case actions.AUTH_SUCCESS:
            return {
                ...state,
                logged: true
            }
        case actions.AUTH_FAIL:
            return {
                ...state,
                error: action.payload,
                logged: false
            }
        case actions.AUTH_LOGOUT:
            return {
                ...state,
                logged: false
            }
        default:
            return state
    }

}