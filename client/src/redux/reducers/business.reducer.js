import {SET_SELECTED_BUSINESS_DETAILS} from '../actions/business.action'
const initialState = {
   CheckedBusinessDetails:"",
}


export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_BUSINESS_DETAILS:
            return { ...state, CheckedBusinessDetails: action.payload }
        default:
            return state

    }
}