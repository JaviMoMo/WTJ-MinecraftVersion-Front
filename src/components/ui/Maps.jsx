import React from 'react';
import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

const Maps = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAOlu_dBEcEqYuRyzkB81uaV0f0OaclpI4"
      })
    return (
        <div>
        
        {isLoaded ? (
  <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={10}
  >
    <></>
  </GoogleMap>
) : <></>}

    </div>
    )
}

export default Maps
