import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useFormik } from "formik";

const Formulario = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
margin-inline: 500px;
margin-top: 50px;
background-color: aliceblue;
border-radius: 15px;
@media (max-width: 800px) {
    margin-inline: 10px;
} 
`

const LabelForm = styled.label`
padding-top: 20px;

`

const InputForm = styled.input`
font-family:'Courier Prime', monospace;
align-self: center;
width: 300px;
`

const BtnForm = styled.button`
font-family:'Courier Prime', monospace;
margin-top: 20px;
text-align: center;
font-size: 15px;
font-weight: bolder;
cursor: pointer;
color: #e9e9e9;
text-shadow: 2px 2px #000a;
box-shadow: inset -2px -4px #0006, inset 2px 2px #fff7;
width: 200px;
padding: 5px;
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

const ImgForm = styled.img`
width: 300px;
`


const FormContributionAnimal = (state) => {
    const [message, setMessage] = useState("");
    const validate = (values) => {
        const errors = {};
        if (!values.userEmail) {
            errors.userEmail = "Requerido";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)) {
            errors.userEmail = "Email introducido es inválido";
        }
        return errors;
    };

    let objectExample = {
        "name": "",
        "email": "",
        "animal": {},
        "family": {},
        "habitat": {}
    };

    const formikAnimals = useFormik({
        initialValues: {
            animal: {
                name: "",
                isBad: false,
                family: [""],
                img: ""
            },
            userName: "",
            userEmail: ""
        },
        validate,
        onSubmit: (formikAnimals) => {
            setMessage("Mensaje enviado, hemos recibido correctamente tu criatura");
            
            objectExample.name = formikAnimals.userName
            objectExample.email = formikAnimals.userEmail
            objectExample.animal = formikAnimals.animal
            handleSubmit(objectExample);
        },
    });

    const handleSubmit = async (e) => {
        console.log(e);
        const response = await axios.post ("http://localhost:3000/collaboration",
        objectExample);
        console.log(response);
    };
console.log(formikAnimals.values.animal.isBad)
    return (
        <div>
            <Formulario onSubmit={formikAnimals.handleSubmit}>
                <LabelForm htmlFor="animal.name">
                   Nombre:
                </LabelForm>
                <InputForm placeholder="Enderman" onChange={formikAnimals.handleChange}
                value={formikAnimals.values.animal.name} id="animal.name" name="animal.name"/>
                <LabelForm htmlFor="animal.isBad">
                   ¿Es malo?: 
                </LabelForm>
                <InputForm type="checkbox" onChange={formikAnimals.handleChange}
                value={formikAnimals.values.animal.isBad} id="animal.isBad" name="animal.isBad"/>
                <LabelForm htmlFor="animal.family">
                   Familia:
                </LabelForm>
                <InputForm placeholder="Zombis" onChange={formikAnimals.handleChange}
                value={formikAnimals.values.animal.family} id="animal.family" name="animal.family"/>
                <LabelForm htmlFor="animal.img">
                   Imagen:
                </LabelForm>
                <InputForm placeholder="https://i.imgur.com/mPFXuQm.png" onChange={formikAnimals.handleChange}
                value={formikAnimals.values.animal.img} id="animal.img" name="animal.img"/>
                <LabelForm htmlFor="userName">
                   Tu nombre:
                </LabelForm>
                <InputForm placeholder="Steve" onChange={formikAnimals.handleChange}
                value={formikAnimals.values.userName} id="userName" name="userName"/>
                <LabelForm htmlFor="userEmail">
                   Tu email:
                </LabelForm>
                <InputForm placeholder="Steve@mojang.com" onChange={formikAnimals.handleChange}
                value={formikAnimals.values.userEmail} id="userEmail" name="userEmail"/>
                <BtnForm type="submit">
                    Enviar criatura
                </BtnForm>
                <p>{message}</p>
                <p>{formikAnimals.values.animal.name}</p>
                <p>{formikAnimals.values.animal.family}</p>
                <ImgForm src={formikAnimals.values.animal.img} alt={formikAnimals.values.animal.name} />
                <p>¿Es malo?: {formikAnimals.values.animal.isBad? "Si" : "No"}</p>
        </Formulario>
        </div>
    )
}

export default FormContributionAnimal
