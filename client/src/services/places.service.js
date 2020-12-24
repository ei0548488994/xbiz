import { connect } from "react-redux";
import {setNearPlaces} from '../redux/actions/places.action'
import axios from 'axios';
//////////חיפוש מקומות קרובים
// var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.178176,34.8520448&radius=5500&type=food&keyword=cruise&key=AIzaSyCeAtVYKR6-eYddASEkHBsgZ1HIkmmtk4c'
//////////חיפוש מקום ספציפי
// var url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Chicago,%20IL&key=AIzaSyCeAtVYKR6-eYddASEkHBsgZ1HIkmmtk4c&inputtype=textquery&fields=name,photos"
//////////חיפוש תמונה חילוץ תמונה
// var url = "https://maps.googleapis.com/maps/api/place/photo?photoreference=ATtYBwKE5BsG5hIRZeVdm26Qp45Nfju47p0ivVxDuNBLixZl_fmin4PuEijErVBI2wMhoN5Wk60Y4n-F47Sq3o6G0wIVdinRkDUVdhfwEOA-tb5h30SbwIKh9R7CEL13vhPfJeKMpTggvfBZnEkeQ82yw21EZjXLyHjrK2x0bPaKGWIzv4_8&key=AIzaSyCeAtVYKR6-eYddASEkHBsgZ1HIkmmtk4c&maxwidth=400&maxheight=400"

// var url = proxyUrl + ''

//const proxyUrl = "http://localhost:3003/";
//const placesRequestUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.178176,34.8520448&radius=5500&type=food&keyword=cruise&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
// `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${city_state}&key=${process.env.REACT_APP_API_KEY}&inputtype=textquery&fields=name,photos`;
var url = 'http://localhost:3003/places';
class PlacesService {
    getAllPlacesNearBySearchText(text,location) {
        debugger
        var key = process.env.REACT_APP_GOOGLE_API_KEY
        console.log("key");
        console.log(key)
        console.log("t l")
        console.log(text,location)
        console.log(location.lat)
        console.log(location.lng)
        return axios.get(url + `/nearPlacesBySearch/key=${key}/location=${location.lat},${location.lng}`).then(response => {
            debugger
            console.log("result");
            console.log(response.data.results)
            return response.data.results
        }).catch(o => {
            console.log(o);
        });
    }
}
export default new PlacesService()
// export default connect(
//     (state) => {
//         return {
//             // category: state.category.category,
//             // selectedCategoryId: state.category.selectedCategoryId,
//             // popularCategories: state.category.popularCategories,
//         };
//     },
//     (disatch) => {
//         return {

//             SetAllPlacesNearBySearchText: function (nearPlaces) {
//                 debugger
//                 disatch(setNearPlaces(nearPlaces));
//             }
//         }
//     }
// )(new PlacesService())