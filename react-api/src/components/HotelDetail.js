import React, { Component }from "react";

class HotelDetail extends Component {  

  state = {
    details: {},
    locationInfo: {}
  }

  componentDidMount() { 

    var url = window.location.href.split('/');
    var hotelId = url[url.length-1];

    console.log('Hotel id: '+ hotelId);

    fetch('http://localhost:5000/getHotelById/'+hotelId)
    .then(res => res.json())
    .then((data) => {
      this.setState({ details: data })
      this.setState({ locationInfo: data.location })
      console.log(data);
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
      <h4>{this.state.locationInfo.address}</h4>
    </div> 
  );
  }
}

export default HotelDetail;