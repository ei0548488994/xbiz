import { SET_SELECTED_BUSINESS_DETAILS,ADD_CLICK_TO_BUSINESS } from '../actions/business.action'
const initialState = {
    CheckedBusinessDetails: "",
}


export default function businessReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_BUSINESS_DETAILS:
            return { ...state, CheckedBusinessDetails: action.payload }
        case ADD_CLICK_TO_BUSINESS:
            {
                debugger
                return action.payload
            }
        default:
            return state

    }
}