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
             <a href={'/hotel-detail/'+hotel._id}>detail
             <img src={hotel.image} alt={hotel.name} /> 
             </a>   
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
             <i class="fas fa-camera"></i>	

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
              
                      
            </div>
          </div>

          </div>
        ))}
      </div>
      
    )
  };    

  function getStars(rating) {

    // Round to nearest half
    rating = Math.round(rating * 2) / 2;
    let output = [];
  
    // Append all the filled whole stars
    for (var i = rating; i >= 1; i--)
      output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
  
    // If there is a half a star, append it
    if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
  
    // Fill the empty stars
    for (let i = (5 - rating); i >= 1; i--)
      output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
  
    return output.join('');
  
  }
  export default Hotels