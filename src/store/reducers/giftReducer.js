import * as actions from '../actions/actionTypes';

const initialState = {
    error: null,
    loading: false,
    gifts: [],
    success: false
}

export default (state = initialState, action) => {

    switch (action.type) {
        case actions.NEW_GIFT:
            //REMOVE!! Test only
            let updatedGifts = state.gifts;
            console.log(state.gifts);
            
            let index = state.gifts.length;
            updatedGifts[index] = action.payload


        return{
            ...state,
            gifts: updatedGifts

        }
        case actions.FETCH_GIFTS:
            return {
                ...state,
                error: null,
                //gifts: action.payload
            }
        case actions.GIFT_START:
            return {
                ...state,
                error: null,
                loading: true,
                success: false
            }
        case actions.GIFT_FINISH:
            return {
                ...state,
                loading: false
            }
        case actions.GIFT_FAIL:
            return {
                ...state,
                error: action.payload,
                success: false
            }
        case actions.GIFT_SUCCESS:
        return{
            ...state,
            success: true
        }
        default:
            return state
    }

}