import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class HotelDetail extends Component {

  state = {
    details: {},
    locationInfo: {},
    latlng: {},
    lat: 4.683,
    lng: -74.050,
  }

  componentDidMount() {

    var url = window.location.href.split('/');
    var hotelId = url[url.length - 1];

    fetch('http://localhost:5000/getHotelById/' + hotelId)
      .then(res => res.json())
      .then((data) => {
        this.setState({ details: data })
        this.setState({ locationInfo: data.location })
        this.setState({ latlng: data.location.geo })
        this.setState({ lat: data.location.geo.lag })
        this.setState({ lng: data.location.geo.lng })

      })
      .catch(console.log)
  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col">
              <a href='/'><strong>Go Back</strong></a>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h2>{this.state.details.name}</h2>
            </div>
          </div>
          <div class="row">
            <div class="col ">
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star-o text-warning"></i>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h4>{this.state.locationInfo.address}, {this.state.locationInfo.city}, {this.state.locationInfo.zipcode}</h4>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <a href={this.state.details.web}>{this.state.details.web} </a>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <a href={"mailto:" + this.state.details.mail}>Contact us </a>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div style={{ width: "100vw", height: "100vh" }}>
                <Map
                  google={this.props.google}
                  zoom={18}
                  style={mapStyles}
                  initialCenter={{ lat: 4.683, lng: -74.050 }}
                >
                  <Marker position={{ lat: 4.683, lng: -74.050 }} />
                </Map>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBZJ6jICkoU62Oq-eXjjfWS_dbf1fQMvAc '
})(HotelDetail);