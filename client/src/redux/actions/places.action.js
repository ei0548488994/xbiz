import PlacesService from '../../services/places.service'
export const GET_NEAR_PLACES_BY_SEARCH = "[places] GET_NEAR_PLACES_BY_SEARCH"
export const SET_NEAR_PLACES_BY_SEARCH = "[places] SET_NEAR_PLACES_BY_SEARCH"

export function getNearPlaces() {
    debugger
    return async (dispatch) => {
        debugger
        const nearPlaces = await PlacesService.getAllPlacesNearBySearchText();
        console.log("nearPlaces")
        console.log(nearPlaces)
    }
}
export function setNearPlaces(nearPlaces) {
    console.log(nearPlaces);
    
    return {
        type: SET_NEAR_PLACES_BY_SEARCH,
        payload: nearPlaces
    }
}