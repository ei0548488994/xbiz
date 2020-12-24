
import { SET_SELECTED_BUSINESS_DETAILS, CREATE_BUSINESS, SEND_MAIL, ADD_CLICK_TO_BUSINESS, ADD_SHERE_TO_BUSINESS, GET_ALL_FAVORAITS, DELETE_FAVORITS_BY_BUSSINES } from '../actions/business.action'

const initialState = {
    CheckedBusinessDetails: "",
}

export default function bisinessReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_BUSINESS_DETAILS:
            console.log(action.payload)
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
            case ADD_SHERE_TO_BUSINESS:
            {
                debugger
                return action.payload
            }
        case GET_ALL_FAVORAITS:
            {
                debugger
                return action.payload
            }
        case DELETE_FAVORITS_BY_BUSSINES:
            {
                debugger
                return action.payload
            }
        default:
            return state
    }
}