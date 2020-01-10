import React from 'react'

  const Hotels = ({ hotels }) => {
    return (
      <div>
        <center><h1>Hotel List</h1></center>
        {hotels.map((hotel) => (
          <div className="card" key={hotel._id}>
            <div className="card-body">
              <h5 className="card-title">{hotel.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{hotel.email}</h6>
              
              <a href={'/hotel-detail/'+hotel._id}>detail</a>            
            </div>
          </div>
        ))}
      </div>
      
    )
  };    

  export default Hotels