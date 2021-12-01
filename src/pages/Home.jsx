import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";

const HomeDiv = styled.div`
margin-top: 50px;
display: flex;
text-align: center;
justify-content: space-around;
align-items: center;
@media (max-width: 800px){
        flex-direction: column;
    }
`

const HomeText = styled.p`

`
const TextDiv = styled.div`
background-color: white;
font-size: 25px;
padding: 40px;
width: 40%;
border-radius: 15px;
box-shadow: 5px 5px 5px 5px black;
@media (max-width: 800px){
        width: 70%;
        margin-bottom: 20px;
    }
`

const HomeLinks = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`

const LinkContain = styled.div`
background-color: white;
width: 400px;
margin-bottom: 20px;
border-radius: 15px;
border: 3px solid black;
&:hover{
    transition: 0.2s;
    transform: scale(105%);
    box-shadow: 5px 5px 5px 5px black;
}
@media (max-width: 576px) {
    width: 300px;
}
`

const ImgLink = styled.img`
margin: 10px;
width: 90%;
height: 70%;
object-fit: cover;
border-radius: 15px;
border: 3px solid black;
`

const TextLink = styled.p`
font-size: 20px;
font-weight: bolder;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Home = () => {
    return (
        <HomeDiv>
            <TextDiv>
                <HomeText>
                    Bienvenido a la jungla de Minecraft, en esta app podrás ver todas las criaturas de este mundo. En el apartado de 'Criaturas' podrás verlas todas, filtrarlas y verlas con más detalle. Mientras que en el apartado de 'Biomas' podrás ver geolocalizaciones de los biomas en el mundo real. Además podrás añadir más criaturas y biomas que vayan apareciendo.
                </HomeText>
            </TextDiv>
            <HomeLinks>
                <StyledLink to="/criaturas">
                    <LinkContain>
                        <ImgLink src="https://i.imgur.com/qfcO1jQ.png" alt="Criaturas" />
                        <TextLink>Criaturas</TextLink>
                    </LinkContain>
                </StyledLink>
                <StyledLink to="/biomas">
                <LinkContain>
                <ImgLink src="https://i.imgur.com/fsFPiTD.png" alt="Biomas"/>
                    <TextLink>Biomas</TextLink>
                </LinkContain>
                </StyledLink>
            </HomeLinks>
        </HomeDiv>
    )
}

export default Home
