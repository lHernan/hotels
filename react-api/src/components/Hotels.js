import React from 'react'

  const Hotels = ({ hotels }) => {
    return (
      <div>
        <center><h1>Hotel List</h1></center>
        {hotels.map((hotel) => (
          <div>
             <div class="container">
             
           <div class="row">
             <div class="col">
             <img src={hotel.image} alt={hotel.name} /> 
             </div>
           </div>
           <div class="row">
             <div class="col-6">
               aqui va el nombre
             </div>
             <div class="col">
               precio por noche
             </div>
           </div>
           <div class="row">
             <div class="col-6">
               aqui van las estrellas
             </div>
             <div class="col">
               precio y currency
             </div>
           </div>
         </div>

          <div className="card" key={hotel._id}>
            <div className="card-body">
              <h5 className="card-title">{hotel.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{hotel.email}</h6>
              
              <a href={'/hotel-detail/'+hotel._id}>detail</a>            
            </div>
          </div>

          </div>
        ))}
      </div>
      
    )
  };    

  export default Hotels