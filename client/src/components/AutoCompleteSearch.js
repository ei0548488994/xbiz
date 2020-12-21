
import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import './home_page/homePage.css'

export class AutoCompleteSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
        lat: 51.507351,
        lng: -0.127758
      }
    }
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    debugger
    localStorage.setItem('changedLocation', "true");
    if(address=="")
    {
       localStorage.setItem('changedLocation', "false");
    }
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({ address });
        console.log('Success', latLng);
        this.setState({ mapCenter: latLng })
      })
      .catch(error => console.error('Error', error));
  };
  componentDidUpdate() {
    /////////////////שמירת מיקום של user 
    debugger
    if(this.state.address=="")
    {
      localStorage.setItem('changedLocation', "false");
    }
    localStorage.setItem('CurrentUserLocationLat', this.state.mapCenter.lat);
    localStorage.setItem('CurrentUserLocationLng', this.state.mapCenter.lng);
    // if (localStorage.getItem('CurrentUserLocationLat') != "51.507351" &&
    //   localStorage.getItem('CurrentUserLocationLng') != "-0.127758") {
    //   localStorage.setItem('changedLocation', "true");
    // }

  }
  changedLocation() {
    
  }
  render() {
    return (
      <div id="googleMap">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          // onChange={this.changedLocation}
          onSelect={this.handleSelect}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                // onChange={(e) => this.changedLocation(e.target.value)}
                {...getInputProps({
                  placeholder: 'מיקום',
                  className: 'location-search-input col-6',
                  // onChange={(e) => this.changedLocation(e.target.value)}
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
        </PlacesAutocomplete>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(AutoCompleteSearch)