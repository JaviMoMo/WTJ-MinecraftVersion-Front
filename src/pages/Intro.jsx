import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";


const IntroDiv = styled.div`

`
const FirstDiv = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`

const Title = styled.h1`
font-size: 40px;
margin-top: 50px;
cursor: default;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const BtnStart = styled.div`
text-decoration: none;
font-size: 20px;
font-weight: bolder;
cursor: pointer;
color: #e9e9e9;
text-shadow: 2px 2px #000a;
box-shadow: inset -2px -4px #0006, inset 2px 2px #fff7;
margin-top: 50px;
width: 150px;
padding: 10px;
border: 2px solid black;
background-color: grey;
&:hover{
    background-color: #5b72d6;
    color: #ffff8e;
}
&:active{
    box-shadow: inset -2px -4px #0006, inset 1px 1px #fff7;
}
`

const ImgsContain = styled.div`
position: relative;
top: 30%;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
z-index: -1;
`

const ImgLeft = styled.img`
position: relative;
left:-10%;
width: 1000px;
height: 900px;
&:hover{
    transition: 0.3s;
    transform: scale(105%);
}
@media (max-width: 800px){
    left: 0%;
    width: 100%;
    height: 600px;
}
`
const ImgRight = styled.img`
margin-top: 100px;
margin-right: 50px;
width: 700px;
height: 100%;
&:hover{
    transition: 0.3s;
    transform: scale(105%);
}
@media (max-width: 800px){
    display: none;
}
`
const DivLink = styled.div`
align-self: center;
`



const Intro = () => {
    return (
        <IntroDiv>
            <FirstDiv>
                <Title>Welcome to the Jungle (Versión Minecraft)</Title>
                <DivLink>
                <StyledLink to="/home" >
                    <BtnStart>COMENZAR</BtnStart>
                </StyledLink>
                </DivLink>
                <ImgsContain>
                    <ImgLeft src="https://cdn.worldvectorlogo.com/logos/minecraft-1.svg" alt="minecraft cube"/>
                    <ImgRight src="https://i.imgur.com/U5gFFAT.png" alt="all mobs" />
                </ImgsContain>
            </FirstDiv>
        </IntroDiv>
    )
}

export default Intro
