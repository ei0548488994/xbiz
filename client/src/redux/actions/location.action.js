export const SET_CURRENT_USER_LOCATION ="[location] SET_CURRENT_USER_LOCATION";


export function setUserLocation(location){
    debugger
    location={
        "lat":Number(localStorage.getItem('CurrentUserLocationLat')),
        "lng":Number(localStorage.getItem('CurrentUserLocationLng'))
    }
    debugger
    console.log("actionL")
    console.log(location)
    return{
        type:SET_CURRENT_USER_LOCATION,
        payload:location
    }
}