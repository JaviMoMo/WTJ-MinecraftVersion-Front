import React from 'react';
import styled from "styled-components";
import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";

import Animals from "../../pages/Animals";
import Habitats from "../../pages/Habitats";
import Home from "../../pages/Home";
import Collaborate from "../../pages/Collaborate";
import Intro from "../../pages/Intro";

const NavContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.img`
margin: 1rem;
width: 60px;
&:hover{
    transition: 0.3s;
    transform: scale(105%);
}
`

const DivButtons = styled.div`
margin-right: 200px;
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 800px){
        flex-direction: column;
        margin-right: 0px;
    }
`

const Btn = styled.div`
margin: 20px;
text-align: center;
font-size: 20px;
font-weight: bolder;
cursor: pointer;
color: #e9e9e9;
text-shadow: 2px 2px #000a;
box-shadow: inset -2px -4px #0006, inset 2px 2px #fff7;
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

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;



const Navbar = () => {
    return (
        <Router>
        <NavContent>
            <StyledLink to="/">
            <Logo src="https://i.imgur.com/z7UWZbo.png" alt="logo jungle"/>
            </StyledLink>
            <DivButtons>
                <StyledLink to="/criaturas" >
                    <Btn>Criaturas</Btn>
                </StyledLink>
                <StyledLink to="/biomas">
                    <Btn>Biomas</Btn>
                </StyledLink>
                <StyledLink to="/colabora">
                    <Btn>Colabora</Btn>
                </StyledLink>
            </DivButtons>
        </NavContent>
        <main>
        <Routes>
            <Route exact path="/" element={<Intro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/criaturas" element={<Animals />} />
            <Route path="/biomas" element={<Habitats />} />
            <Route path="/colabora" element={<Collaborate />} />
        </Routes>
        </main>
        </Router>
    )
}

export default Navbar
