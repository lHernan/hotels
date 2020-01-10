import React from "react";

import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";

function HotelDetail(props) {

  let { hotelId } = useParams();

  return (
    <div>
      <a href='/'>Go Back</a>
      <br></br>
      HotelDetail: {hotelId}
    </div> 
  ); 
} 

export default HotelDetail;