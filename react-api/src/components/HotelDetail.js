import React, { Component }from "react";
import Fetch from './Fetch.js';
import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";

function HotelDetail(props) {
  var details;
  let { hotelId } = useParams();
  let detalles = getDetails(hotelId);
  detalles.then(function(result){
    console.log(result.name);
    details = result;
    console.log(details.name);
  })
  return (
    <div>
      <a href='/'>Go Back</a>
      <br></br>
  <div>{details.name}</div>
      
    </div> 
  ); 
}

async function getDetails(id) {
  var hotel = await Fetch.get('getHotelById/' + id);
  console.log(hotel);
  return hotel;
}

class Detalles extends Component {
  state = {
    detalles: []
  }
  componentDidMount() {
    fetch(`http://localhost:5000/getHotelById/5e0eb367292e020c94ca6ed3`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ hotels: data })
    })
    .catch(console.log)
  }
}



export default HotelDetail;
