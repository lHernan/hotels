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
                
                <button onClick={() => getDetails(hotel._id)}>𝗫</button>             
              </div>
            </div>
          ))}
        </div>
        
      )
    };

    async function getDetails(id) {
      const hotel = await Fetch.get('getHotelById/' + id);
      console.log(hotel);
    }
    

    export default Hotels