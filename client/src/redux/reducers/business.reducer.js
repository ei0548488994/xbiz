import { SET_SELECTED_BUSINESS_DETAILS, CREATE_BUSINESS, SEND_MAIL, ADD_CLICK_TO_BUSINESS } from '../actions/business.action'
const initialState = {
    CheckedBusinessDetails: "",
}


export default function bisinessReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_BUSINESS_DETAILS:
            return { ...state, CheckedBusinessDetails: action.payload }
        case CREATE_BUSINESS:
        // return { ...state, CheckedBusinessDetails: action.payload }
        case SEND_MAIL:
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