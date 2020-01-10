import React from "react";

import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";

function HotelDetail(props) {

  let { hotelId } = useParams();

  return (
    <div>
      HotelDetail: {hotelId}
     </div> 
  ); 
} 

export default HotelDetail;