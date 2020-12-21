import React from "react";
import { geolocated } from "react-geolocated";
import { setUserLocation } from '../redux/actions/location.action'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
class userLocation extends React.Component {
    componentDidUpdate() {
        //////////////// שמירת מיקום נוכחי אם לא ביקש לדעת מיקום אחר   
        if (this.props.coords) {
            console.log("arrive")
            debugger
            localStorage.setItem('CurrentUserLocationLat', this.props.coords.latitude);
            localStorage.setItem('CurrentUserLocationLng', this.props.coords.longitude);
            this.props.history.push("/ResultOfSearchList");
            console.log("אישור");
            
        }
        ///כאשר מתבצעת חסימה ולא מאפשרים לשירותי המיקום לדעת מיקום נוכחי שומר ערך דפולטיבי
        if (!this.props.isGeolocationEnabled) {
            localStorage.setItem('CurrentUserLocationLat', 51.507351);
            localStorage.setItem('CurrentUserLocationLng', -0.127758);
            // alert("לא הצלחנו לזהות את מיקום המדוייק שלך. כדי לקבל את תוצאות הרלוונטיות  ביותר יש לאשר את שירותי המיקום.")
            // console.log("חסימה");
            // // this.props.coords
            // this.props.history.push("/ResultOfSearchList");


            //this.props.history.push("/ResultOfSearchList");

        }
        if (!this.props.coords) {
            alert("לא הצלחנו לזהות את מיקום המדוייק שלך. כדי לקבל את תוצאות הרלוונטיות  ביותר יש לאשר את שירותי המיקום.")
            console.log("חסימה");
            // this.props.coords
            this.props.history.push("/ResultOfSearchList");
        }
        // if (!this.props.isGeolocationAvailable) {
        //     console.log("isGeolocationAvailable")
        // }
    }
    render() {
        return <></>
        // return !this.props.isGeolocationAvailable ? (
        //     <div>Your browser does not support Geolocation</div>
        // ) : !this.props.isGeolocationEnabled ? (
        //     <div>Geolocation is not enabled</div>
        // ) : this.props.coords ? (
        //     <table>
        //         <tbody>
        //             <tr>
        //                 <td>latitude</td>
        //                 <td>{this.props.coords.latitude}</td>
        //             </tr>
        //             <tr>
        //                 <td>longitude</td>
        //                 <td>{this.props.coords.longitude}</td>
        //             </tr>
        //         </tbody>
        //     </table>
        // ) : (
        //                 <div>Getting the location data&hellip; </div>
        //             );
    }
}
// )
export default
    geolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    })(withRouter(userLocation));