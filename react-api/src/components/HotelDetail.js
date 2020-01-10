import React, { Component }from "react";
import { GoogleMap,  withGoogleMap,
  withScriptjs, Marker, InfoWindow} from "react-google-maps";
  import Map from './Map.js';
const MapWrapped = withScriptjs(withGoogleMap(Map));

class HotelDetail extends Component {  

  state = {
    details: {},
    locationInfo: {},
    latlng:{},
  }

  componentDidMount() { 

    var url = window.location.href.split('/');
    var hotelId = url[url.length-1];

    fetch('http://localhost:5000/getHotelById/'+hotelId)
    .then(res => res.json())
    .then((data) => {
      this.setState({ details: data })
      this.setState({ locationInfo: data.location })      
      this.setState({ latlng: data.location.geo })  
    })
    .catch(console.log)
  }
  render() {
  return (
    <div>
    <div class="container">
    <div class="row">
      <div class="col">
    <a href='/'>Go Back</a>
    </div>
  </div>
  <div class="row">
    <div class="col">
      aqui va el nombre del hotel
    </div>
  </div>
  <div class="row">
    <div class="col">
      aqui van las estrellas
    </div>
  </div>
  <div class="row">
    <div class="col">
      aqui va la direccion
    </div>
  </div>
  <div class="row">
    <div class="col">
      aqui va el mapa
    </div>
  </div>
</div>

    <div>
      <a href='/'>Go Back</a>
      <br></br>
      <h2>{this.state.details.name}</h2>
      <h4>{this.state.details.mail}</h4>
      <h4>{this.state.locationInfo.address}, {this.state.locationInfo.city}, {this.state.locationInfo.zipcode}</h4>
      <h4>{this.state.latlng.lat}</h4>
      <h4>{this.state.latlng.lng}</h4>
      <h4>{this.state.details.currency}</h4>
      <h4>{this.state.details.web}</h4>
      <img src={this.state.details.image} alt={this.state.details.name} /> 
      <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAi9-gnm4L4lBpQgOPXbmPf6YbxLf4g2bE`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
    </div> 

    </div>
  );
  }
  
}

export default HotelDetail;
