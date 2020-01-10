import React, { Component }from "react";

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
      
    </div> 
  );
  }
}

export default HotelDetail;
