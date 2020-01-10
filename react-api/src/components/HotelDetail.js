import React, { Component }from "react";
import Fetch from './Fetch.js';
import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";

class HotelDetail extends Component {  

  state = {
    details: {'name': 'Hotel name on detail', 'sublabel': 'Hotel description'}
  }

  componentDidMount() { 

    var url = window.location.href.split('/');
    var hotelId = url[url.length-1];

    console.log('Hotel id: '+ hotelId);

    fetch('http://localhost:5000/getHotelById/'+hotelId)
    .then(res => res.json())
    .then((data) => {
      this.setState({ details: data })
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
    </div> 
  );
  }
}

export default HotelDetail;