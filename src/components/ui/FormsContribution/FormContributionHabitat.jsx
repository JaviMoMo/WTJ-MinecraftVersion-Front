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


const FormContributionHabitat = (state) => {
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

    const formikHabitats = useFormik({
        initialValues: {
            habitat: {
                name: "",
                location: {
                    x: 0,
                    y: 0
                },
                img: ""
            },
            userName: "",
            userEmail: ""
        },
        validate,
        onSubmit: (formikHabitats) => {
            setMessage("Mensaje enviado, hemos recibido correctamente este habitat");
            
            objectExample.name = formikHabitats.userName
            objectExample.email = formikHabitats.userEmail
            objectExample.habitat = formikHabitats.habitat
            handleSubmit(objectExample);
        },
    });

    const handleSubmit = async (e) => {
        console.log(e);
        const response = await axios.post ("http://localhost:3000/collaboration",
        objectExample);
        console.log(response);
    };
console.log(formikHabitats.values.habitat.livingInGroup)
    return (
        <div>
            <Formulario onSubmit={formikHabitats.handleSubmit}>
                <LabelForm htmlFor="habitat.name">
                   Nombre:
                </LabelForm>
                <InputForm placeholder="Desierto" onChange={formikHabitats.handleChange}
                value={formikHabitats.values.habitat.name} id="habitat.name" name="habitat.name"/>
                <LabelForm htmlFor="habitat.location.x">
                   Coordenadas X: 
                </LabelForm>
                <InputForm type="number" placeholder="-89.33" onChange={formikHabitats.handleChange}
                value={formikHabitats.values.habitat.location.x} id="habitat.location.x" name="habitat.location.x"/>
                <LabelForm htmlFor="habitat.location.y">
                   Coordenadas Y: 
                </LabelForm>
                <InputForm type="number" placeholder="29.85" onChange={formikHabitats.handleChange}
                value={formikHabitats.values.habitat.location.y} id="habitat.location.y" name="habitat.location.y"/>
                <LabelForm htmlFor="habitat.img">
                   Imagen:
                </LabelForm>
                <InputForm placeholder="https://i.imgur.com/mPFXuQm.png" onChange={formikHabitats.handleChange}
                value={formikHabitats.values.habitat.img} id="habitat.img" name="habitat.img"/>
                <LabelForm htmlFor="userName">
                   Tu nombre:
                </LabelForm>
                <InputForm placeholder="Steve" onChange={formikHabitats.handleChange}
                value={formikHabitats.values.userName} id="userName" name="userName"/>
                <LabelForm htmlFor="userEmail">
                   Tu email:
                </LabelForm>
                <InputForm placeholder="Steve@mojang.com" onChange={formikHabitats.handleChange}
                value={formikHabitats.values.userEmail} id="userEmail" name="userEmail"/>
                <BtnForm type="submit">
                    Enviar bioma
                </BtnForm>
                <p>{message}</p>
                <p>{formikHabitats.values.habitat.name}</p>
                <ImgForm src={formikHabitats.values.habitat.img} alt={formikHabitats.values.habitat.name} />
                <p>X: {formikHabitats.values.habitat.location.x}</p>
                <p>Y: {formikHabitats.values.habitat.location.y}</p>
        </Formulario>
        </div>
    )
}

export default FormContributionHabitat