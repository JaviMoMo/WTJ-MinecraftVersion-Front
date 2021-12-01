import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from "styled-components";
import Modal from "react-modal";
import "../styles/modal.css";

const AllDiv = styled.div`
margin-inline: 20rem;
@media (max-width: 800px) {
  margin-inline: 5rem;
}
`

const NameMob = styled.p`
font-weight: bold;
text-transform: capitalize;
`

const ImgMob = styled.img`
width: 150px;
height: 90%;
object-fit: cover;
`

const ImgMobFamily = styled.img`
width: 250px;
height: 90%;
object-fit: cover;
`

const ImgMobModal = styled.img`
width: 150px;
`

const MobsContain = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`

const DivMob = styled.a`
cursor: pointer;
padding: 20px;
display: flex;
flex-direction: column;
text-align: center;
max-height: 200px;
justify-content: center;
margin-bottom: 20px;
&:hover{
    transition: 0.3s;
    transform: scale(105%);
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.281);
    border: 3px solid black;
}
`

const BtnCloseModal = styled.button`
  position: absolute;
  right: 0;
  margin: 1rem;
  width: 2em; height: 2em;
  border-radius: 50%;
  border: none;
  font-weight: bold;
  font-size: 20px;
  color: black;
  cursor: pointer;
  &:focus {
    outline: solid 0 transparent;
    box-shadow: 0 0 0 2px #0000009c
  }      
  &:hover {
    transition: 0.2s;
    transform: scale(130%);
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid black;
  }
`

const ButtonsDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
margin-bottom: 50px;

`


const BtnBadGood = styled.button`
font-family:'Courier Prime', monospace;
text-align: center;
font-size: 15px;
cursor: pointer;
color: #e9e9e9;
text-shadow: 2px 2px #000a;
box-shadow: inset -2px -4px #0006, inset 2px 2px #fff7;
width: 120px;
height: 90px;
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

const AllAnimals = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [otherModalIsOpen, setOtherModalIsOpen] = useState(false)
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [selectedFamilies, setSelectedFamilies] = useState(null);

  const expandModal = (animal) => {
      setSelectedAnimal(animal);
      setModalIsOpen(true);
  }

  const expandOtherModal = (family) => {
    setSelectedFamilies(family);
    setOtherModalIsOpen(true);
  }

  const [animals, setAnimals] = useState(false);
  const [isBad, setIsBad] = useState(false);
  const [isGood, setIsGood] = useState(false);
  const [families, setFamilies] = useState(false);
  const [livingInGroup, setLivingInGroup] = useState(false);
  const [noLivingInGroup, setNoLivingInGroup] = useState(false);

  const BASEURL = "http://localhost:3000";
  const ANIMALSURL = "/animals";
  const FAMILIESURL = "/families"
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [isLoadedFamilies, setIsLoadedFamilies] = useState(false);
  const [itemsFamilies, setItemsFamilies] = useState([]);

  useEffect(() => {
    axios(BASEURL + ANIMALSURL).then(
      (res) => {
        setItems(res.data.data.animals);
        console.log(res.data.data.animals);
        setIsLoaded(true);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  useEffect(() => {
    axios(BASEURL + FAMILIESURL).then(
      (res) => {
        setItemsFamilies(res.data.data.families);
        console.log(res.data.data.families);
        setIsLoadedFamilies(true);
      },
      (error) => {
        setIsLoadedFamilies(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
      return (
          <>
            <div>
                <p>ERROR</p>
            </div>
          </>
      )
  } else if (!isLoaded && !isLoadedFamilies) {
      return (
          <>
            <div>
                <p>CARGANDO</p>
            </div>
          </>
      )
  } else {
      return (
          <AllDiv>
          <ButtonsDiv>
            <BtnBadGood onClick={() => {setAnimals(!animals); setIsBad(false); setIsGood(false); setFamilies(false); setLivingInGroup(false); setNoLivingInGroup(false);}}>
              Ver todas las criaturas</BtnBadGood>
              <BtnBadGood onClick={() => {setIsBad(!isBad); setIsGood(false); setAnimals(false); setFamilies(false); setLivingInGroup(false); setNoLivingInGroup(false);}}>
                Criaturas malas 😈</BtnBadGood>
              <BtnBadGood onClick={() => {setIsGood(!isGood); setIsBad(false); setAnimals(false); setFamilies(false); setLivingInGroup(false); setNoLivingInGroup(false);}}>
                Criaturas buenas 😇</BtnBadGood>
              <BtnBadGood onClick={() => {setFamilies(!families) ;setIsGood(false); setIsBad(false); setAnimals(false); setLivingInGroup(false); setNoLivingInGroup(false);}}>
                Familias</BtnBadGood>
              <BtnBadGood onClick={() => {setLivingInGroup(!livingInGroup); setNoLivingInGroup(false); setFamilies(false) ;setIsGood(false); setIsBad(false); setAnimals(false)}}>
                Viven en grupo</BtnBadGood>
                <BtnBadGood onClick={() => {setNoLivingInGroup(!noLivingInGroup); setLivingInGroup(false); setFamilies(false); setIsGood(false); setIsBad(false); setAnimals(false)}}>
                No viven en grupo</BtnBadGood>
            </ButtonsDiv> 
            <MobsContain>
              {
                animals?
                <> 
                {items.map(item => {
                    return (
                      <DivMob onClick={() => expandModal(item)} href>
                        <NameMob>{item.name}</NameMob>
                        <ImgMob src={item.img} alt={item.name} />
                      </DivMob>
                       
                    )
                })}
                </>:null
              }
              <Modal className="modal-content" isOpen={modalIsOpen} >
              <BtnCloseModal onClick={() => setModalIsOpen(false)}>X</BtnCloseModal>
                <NameMob>{selectedAnimal && selectedAnimal.name}</NameMob>
                <ImgMobModal src={selectedAnimal && selectedAnimal.img} alt={selectedAnimal && selectedAnimal.name} />
                <NameMob>¿Es malo?: {selectedAnimal && selectedAnimal.isBad ? "SI" : "NO"}</NameMob>
              </Modal>
            </MobsContain>
            
              <MobsContain>
                {
                  isBad?
                  <> 
                  {items.map(item => {
                    if (item.isBad === true) {
                      return (
                        <DivMob onClick={() => expandModal(item)} href>
                            <NameMob>{item.name}</NameMob>
                            <ImgMob src={item.img} alt={item.name} />
                        </DivMob>
                      )
                    } return (null)
                      
                  })}
                  </>:null
                }
              </MobsContain>
              <MobsContain>
                {
                  isGood?
                  <> 
                  {items.map(item => {
                    if (item.isBad === false) {
                      return (
                        <DivMob onClick={() => expandModal(item)} href>
                            <NameMob>{item.name}</NameMob>
                            <ImgMob src={item.img} alt={item.name} />
                        </DivMob>
                      )
                    } return (null)
                      
                  })}
                  </>:null
                }
              </MobsContain>
              <MobsContain>
              {
                families?
                <> 
                {itemsFamilies.map(item => {
                    return (
                      <DivMob onClick={() => expandOtherModal(item)} href>
                        <NameMob>{item.name}</NameMob>
                        <ImgMobFamily src={item.img} alt={item.name} />
                      </DivMob>
                    )
                })}
                </>:null
              }
              <Modal className="modal-content" isOpen={otherModalIsOpen} >
              <BtnCloseModal onClick={() => setOtherModalIsOpen(false)}>X</BtnCloseModal>
                <NameMob>{selectedFamilies && selectedFamilies.name}</NameMob>
                <ImgMobFamily src={selectedFamilies && selectedFamilies.img} alt={selectedFamilies && selectedFamilies.name} />
                <NameMob>¿Viven en grupo?: {selectedFamilies && selectedFamilies.livingInGroup ? "SI" : "NO"}</NameMob>
              </Modal>
            </MobsContain>
            <MobsContain>
                {
                  livingInGroup?
                  <> 
                  {itemsFamilies.map(item => {
                    if (item.livingInGroup === true) {
                      return (
                        <DivMob onClick={() => expandOtherModal(item)} href>
                            <NameMob>{item.name}</NameMob>
                            <ImgMob src={item.img} alt={item.name} />
                        </DivMob>
                      )
                    } return (null)
                      
                  })}
                  </>:null
                }
              </MobsContain>
              <MobsContain>
                {
                  noLivingInGroup?
                  <> 
                  {itemsFamilies.map(item => {
                    if (item.livingInGroup === false) {
                      return (
                        <DivMob onClick={() => expandOtherModal(item)} href>
                            <NameMob>{item.name}</NameMob>
                            <ImgMob src={item.img} alt={item.name} />
                        </DivMob>
                      )
                    } return (null)
                      
                  })}
                  </>:null
                }
              </MobsContain>
            </AllDiv>
      );
  }
}
 

    


export default AllAnimals
