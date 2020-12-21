import {SET_CURRENT_USER_LOCATION} from '../actions/location.action';

const initialState = {
    currentUserLocation: {
        latitude: 32.0919695,
        longitude: 34.8240924
    },
}

export default function locationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER_LOCATION:
            {
                debugger
                console.log(action.payload)
                return { ...state, currentUserLocation: action.payload }
            }
        default:
            return state

    }
}