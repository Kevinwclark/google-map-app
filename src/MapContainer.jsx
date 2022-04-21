import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 30.34848660712915, lng: -81.66278898751548
  }
  
  return (
     <LoadScript
       googleMapsApiKey='REACT_APP_MAPS_API_KEY'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={17}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;