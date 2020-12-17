export const SET_CURRENT_USER_LOCATION ="[location] SET_CURRENT_USER_LOCATION";


export function setUserLocation(location){
    debugger
    return{
        type:SET_CURRENT_USER_LOCATION,
        payload:location
    }
}