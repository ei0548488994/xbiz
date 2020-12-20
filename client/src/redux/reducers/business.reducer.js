import { SET_SELECTED_BUSINESS_DETAILS,CREATE_BUSINESS,SEND_MAIL } from '../actions/business.action'
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
        default:
            return state

    }
}