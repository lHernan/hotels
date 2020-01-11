import React from 'react'
import '../css/custom.css';

const Hotels = ({ hotels }) => {
  return (
<div>
      <center><h1>Hotel List</h1></center>
      {hotels.map((hotel) => (

        <div key={hotel._id}>
          <div class="container" >

            <div class="row">
              <div class="col-3 " />
              <div class="col ">
                <a href={'/hotel-detail/' + hotel._id}>
                  <img src={hotel.image} alt={hotel.name} class />
                </a>
              </div>
              <div class="col-3 " />
            </div>
            <div class="row">
              <div class="col-3 " />
              <div class="col font-weight-bold">
                {hotel.name}
              </div>
              <div class="col-3 font-italic text-secondary">
                Precio por noche
             </div>
              <div class="col-3 " />
            </div>
            <div class="row">
              <div class="col-3 " />
              <div class="col ">                
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star-o text-warning"></i>
              </div>
              <div class="col text-uppercase">
                {hotel.currency} {hotel.price}
              </div>
              <div class="col-3 " />
            </div>
            <hr class="style3"></hr>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Hotels