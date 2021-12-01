import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DivSearcher = styled.div`

`

const InputName = styled.input`

`

const BtnSearch = styled.button`
font-family:'Courier Prime', monospace;
margin: 20px;
text-align: center;
font-size: 13px;
cursor: pointer;
color: #e9e9e9;
text-shadow: 2px 2px #000a;
box-shadow: inset -2px -4px #0006, inset 2px 2px #fff7;
width: 90px;
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

const MobTitle = styled.p`
text-transform: capitalize;
`

const DivMob = styled.div`

`

const Searcher = () => {
    const [mobName, setMobName] = useState("");
    const [mobChosen, setMobChosen] = useState(false);
    const [error, setError] = useState(null);
    const [mob, setMob] = useState({
        name: "",
        img: "",
        isBad: "",
        family: "",
    });


    const searchMob = () => {
       
        axios.get(`http://localhost:3000/animals/items?name=${mobName.toLowerCase()}`).then(
            (res) => {
              setMob({
                  name: mobName,
                  img: res.data.data.animals[0].img,
                  isBad: res.data.data.animals[0].isBad,
                  family: res.data.data.animals[0].family,
              });
              setMobChosen(true);
            }
        ).catch(error => {
            setError(error)
        })
    }

    if (error) return (
        <p>No se encuentra esa criatura</p>
    )

    return (
        <DivSearcher>
            <InputName
            placeholder="Creeper"
            type="text"
            onChange={(event) => {
                setMobName(event.target.value);
            }}
            />
            <div>
                <BtnSearch onClick={searchMob}>Buscar</BtnSearch>
            </div>
            <div>
                {!mobChosen ? (
                    <p>Busca una criatura</p>
                ) : (
                    <DivMob>
                    <MobTitle>{mob.name.toLowerCase()}</MobTitle>
                    <img src={mob.img} alt={mob.name} />
                    <p>Es malo?: {mob.isBad ? "SI" : "NO"}</p>
                    </DivMob>
                )}
            </div>
        </DivSearcher>
    )
}

export default Searcher

