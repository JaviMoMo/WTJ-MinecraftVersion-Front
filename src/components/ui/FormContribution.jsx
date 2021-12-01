import React, { useState } from "react";
import styled from "styled-components";

import FormContributionAnimal from "./FormsContribution/FormContributionAnimal";
import FormContributionFamily from "./FormsContribution/FormContributionFamily";
import FormContributionHabitat from "./FormsContribution/FormContributionHabitat";

const FormsContain = styled.div`
display: flex;
flex-direction: column;
text-align: center;

`

const DivButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;

`

const BtnForm = styled.div`
text-align: center;
font-size: 20px;
font-weight: bolder;
cursor: pointer;
color: #e9e9e9;
text-shadow: 2px 2px #000a;
box-shadow: inset -2px -4px #0006, inset 2px 2px #fff7;
width: 100px;
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
@media (max-width: 800px){
  width: 70px;
  font-size: 15px;
}
`

const TextTitle = styled.p`
font-size: 20px;
font-weight: bold;
`

const ImgsDiv = styled.div`
margin: 50px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
`

const ImgsForm = styled.img`
width: 300px;
border-radius: 15px;
`

const DivForm = styled.div`
display: flex;
flex-direction: column;
`

const FormContribution = () => {
    const [animals, setAnimals] = useState(false);
    const [families, setFamilies] = useState(false);
    const [habitats, setHabitats] = useState(false);
  return (
    <>
      <FormsContain>
        <TextTitle>Si quieres colaborar, puedes añadir alguna criatura, con su familia correspondiente y el bioma que habita.</TextTitle>
        <DivButtons>
          <BtnForm onClick={() => {setAnimals(!animals); setFamilies(false); setHabitats(false)}}>
            Criatura
          </BtnForm>
          <BtnForm onClick={() => {setFamilies(!families); setAnimals(false); setHabitats(false)}}>
            Familia
          </BtnForm>
          <BtnForm onClick={() => {setHabitats(!habitats); setFamilies(false); setAnimals(false)}}>
            Bioma
          </BtnForm>
        </DivButtons>
        <DivForm>
            {
                animals?
                <>
                <FormContributionAnimal></FormContributionAnimal>
                </>: null
            }
        </DivForm>
        <DivForm>
            {
                families?
                <>
                <FormContributionFamily></FormContributionFamily>
                </>: null
            }
        </DivForm>
        <DivForm>
            {
                habitats?
                <>
                <FormContributionHabitat></FormContributionHabitat>
                </>: null
            }
        </DivForm>
        <ImgsDiv>
          <ImgsForm src="https://i.imgur.com/siW4Rkl.jpg" alt="criaturas"/>
          <ImgsForm src="https://i.imgur.com/5pH5PGU.jpg" alt="familias"/>
          <ImgsForm src="https://i.imgur.com/VTiv0wK.png" alt="biomas"/>
        </ImgsDiv>
      </FormsContain>
    </>
  );
};

export default FormContribution;
