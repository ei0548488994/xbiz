import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
/*import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete'; */
export class MapContainer extends Component {
  componentDidMount(){
    debugger
// let lat= localStorage.getItem('lat');
// let lng= localStorage.getItem('lng');
 // console.log('lat'+"myllllat");
  }
  constructor(props) {
    debugger;
    super(props);
    this.state = { 
      /*address: '',*/
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
        //london
        lat: localStorage.getItem('lat'),
        lng: localStorage.getItem('lng')
       
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
    /*handleChange = address => {
      this.setState({ address });
    };
   
    handleSelect = address => {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          this.setState({ address });
          console.log('Success', latLng);
          this.setState({mapCenter: latLng})
        })
        .catch(error => console.error('Error', error));
    };*/
    render() {
      return (
       <div id="googleMap"> 
        {/*<PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        </PlacesAutocomplete>*/} 
        <Map google={this.props.google}
        style={{ width: '100%',
                 height: '8%'}}
            initialCenter={{
                lat:this.state.mapCenter.lat,
                lng:this.state.mapCenter.lng}}
            cente={{
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

