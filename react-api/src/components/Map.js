

import React, { Fragment } from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ latitude, longitude }) => {
 const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
  position: { lat: latitude, lng: longitude },
  map,
  title: 'Hello World!'
  });
  return marker;
 };

 return (
  <Fragment>
   <div style={{ height: '50vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAi9-gnm4L4lBpQgOPXbmPf6YbxLf4g2bE' }}
      defaultCenter={{ lat: latitude, lng: longitude }}
      defaultZoom={16}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
    >
    </GoogleMapReact>
   </div>
  </Fragment>
 );
};

export default Map;