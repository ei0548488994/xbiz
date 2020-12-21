
import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      /*address: '',*/
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
        lat: 32.093468,
        lng: 34.8682437
      } 
    }
  }
    /*onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };*/
    render() {
      return (
       <div id="googleMap"> 
        <Map google={this.props.google}
            initialCenter={{
                lat:this.state.mapCenter.lat,
                lng:this.state.mapCenter.lng}}
            center={{
                lat:this.state.mapCenter.lat,
                lng:this.state.mapCenter.lng  }}>
          <Marker position={{
                lat:this.state.mapCenter.lat,
                lng:this.state.mapCenter.lng 
          }}/>
        </Map>
      </div>
      )
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
  })(MapContainer)
