import React from 'react'
import Fetch from './Fetch.js';
    const Hotels = ({ hotels }) => {
      return (
        <div>
          <center><h1>Hotel List</h1></center>
          {hotels.map((hotel) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{hotel.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{hotel.email}</h6>
                
                <a href={'/hotel-detail/'+hotel.id}>detail</a>            
              </div>
            </div>
          ))}
        </div>
        
      )
    };    

    export default Hotels