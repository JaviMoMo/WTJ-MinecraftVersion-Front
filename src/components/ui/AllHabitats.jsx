import React, {useState, useEffect} from 'react';
import axios from "axios";
import {GoogleMap, useJsApiLoader, Marker} from "@react-google-maps/api";
import styled from "styled-components";


const ImgHabitat = styled.img`
width: 200px;
`
const HabitatsContain = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
margin-inline: 20rem;
@media (max-width: 900px) {
    margin-inline: 5rem;
}
`

const DivHabitat = styled.a`
font-weight: bold;
width: 200px;
text-transform: capitalize;
background-color: #D8CEAC;
border-radius: 15px;
text-align: center;
margin-bottom: 20px;
cursor: pointer;
&:hover{
    transition: 0.3s;
    transform: scale(105%);
    box-shadow: 5px 5px 5px 5px black;
}
`

const containerStyle = {
    width: '80%',
    height: '400px',
    position: 'relative',
    margin: 'auto',
  };
  
const MapDiv = styled.div`
  text-align: center;
  justify-content: center;
  `
  
const NameHabitat = styled.p`
    text-transform: uppercase;
`




const AllHabitats = () => {

    

        const { isLoaded } = useJsApiLoader({
            id: 'google-map-script',
            googleMapsApiKey: "AIzaSyAOlu_dBEcEqYuRyzkB81uaV0f0OaclpI4"
          })

    const [error, setError] = useState(null);
    const [isLoadedHabitat, setIsLoadedHabitat] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        axios("http://localhost:3000/habitats").then(
            (res) => {
                setItems(res.data.data.habitats);
                console.log(res.data.data.habitats);
                setIsLoadedHabitat(true);
            },
            (error) => {
                setIsLoadedHabitat(true);
                setError(error);
            }
        );
    }, []);


    const [lati, setLatitud] = useState(0);
    const [longi, setLongitud] = useState(0);

     console.log(lati)

    if (error) {
        return (
            <>
              <div>
                  <p>ERROR</p>
              </div>
            </>
        )
    } else if (!isLoadedHabitat) {
        return (
            <>
              <div>
                  <p>CARGANDO</p>
              </div>
            </>
        )
    } else {
        return (
            <>
            <HabitatsContain>
                {items.map(item => {
                    return (
                        
                        <DivHabitat onClick={() => {setLatitud(item.location.y); setLongitud(item.location.x)}}>
                        <NameHabitat>{item.name}</NameHabitat>
                        <p>y: {item.location.y}</p>
                        <p>x: {item.location.x}</p>
                        <p>{item.text}</p>
                        <ImgHabitat src={item.img} alt={item.name} />
                        </DivHabitat>
                    )
                })}
            </HabitatsContain>
            <MapDiv>
                {isLoaded ? (
                    <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{
                        lat: 0,
                        lng: 0
                    }}
                    zoom={1}
                    >
                      <Marker position={
                          {
                              lat: parseFloat(lati),
                              lng: parseFloat(longi)
                          }
                      }></Marker>
                    </GoogleMap>
                ) : <></>}
            </MapDiv>
            </>
        )
    }

}

export default AllHabitats
