import React from 'react';
import styled from 'styled-components';
import AllAnimals from '../components/ui/AllAnimals';
import Searcher from '../components/ui/Searcher';

const AnimalsDiv = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`

const TitleAnimals = styled.h2`
font-weight: bolder;
font-size: 30px;
`

const ContainAnimals = styled.div`
`

const UtilsDiv = styled.div`
`

const Animals = () => {
  

    return (
        <AnimalsDiv>
          <TitleAnimals>Criaturas</TitleAnimals>
          <ContainAnimals>
            <UtilsDiv>
              <Searcher></Searcher>
            </UtilsDiv>
            <AllAnimals></AllAnimals>
              
          </ContainAnimals>
        </AnimalsDiv>
    )
}

export default Animals
