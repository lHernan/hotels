import React, { Component }from "react";
import { Map, GoogleApiWrapper , Marker} from 'google-maps-react';
const mapStyles = {
  width: '100%',
  height: '100%',
};

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
      <Map
          google={this.props.google}
          zoom={18}
          style={mapStyles}
          initialCenter={{ lat: 4.683, lng: -74.050}}
          >
          <Marker position={{ lat: 4.683, lng: -74.050}} />
        </Map>
    </div>
    </div> 

    </div>
  );
  }
  
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBZJ6jICkoU62Oq-eXjjfWS_dbf1fQMvAc '
})(HotelDetail);