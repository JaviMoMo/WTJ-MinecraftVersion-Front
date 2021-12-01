import React from 'react';
import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";
const KEYGOOGLE = process.env.KEYGOOGLE;

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
        googleMapsApiKey: KEYGOOGLE
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
