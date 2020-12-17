import React from "react";
import { geolocated } from "react-geolocated";
import { setUserLocation } from '../redux/actions/location.action'
import { connect } from "react-redux";

function mapStateToProps(state) {
    // debugger
    // return {
    //     currentUserLocation: state.location.currentUserLocation
    // };
}
const mapDispatchToProps = (dispatch) => ({

    setUserLocation: (location) => dispatch(setUserLocation(location)),
})

// connect(mapStateToProps, mapDispatchToProps)(
    class userLocation extends React.Component {
    render() {

        return (<></>)
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
        //     <div>Getting the location data&hellip; </div>
        // );
    }
}
// )
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})( userLocation);