import{
    SET_NEAR_PLACES_BY_SEARCH
} from '../actions/places.action'

const initialState = {
    nearPlacesBySearch:{}
}
export default function placesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NEAR_PLACES_BY_SEARCH: {
            var nearPlaces = [];
            Object.keys(action.payload).forEach(key => nearPlaces.push({ name: key, value: action.payload[key] }))
            console.log(nearPlaces)
            debugger
            return { ...state, nearPlacesBySearch:nearPlaces  }
        }
        default:
            return state

    }
}