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

const FormContributionFamily = (state) => {
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

    const formikFamilies = useFormik({
        initialValues: {
            family: {
                name: "",
                livingInGroup: false,
                habitat: [""],
                img: ""
            },
            userName: "",
            userEmail: ""
        },
        validate,
        onSubmit: (formikFamilies) => {
            setMessage("Mensaje enviado, hemos recibido correctamente esta familia");
            
            objectExample.name = formikFamilies.userName
            objectExample.email = formikFamilies.userEmail
            objectExample.family = formikFamilies.family
            handleSubmit(objectExample);
        },
    });

    const handleSubmit = async (e) => {
        console.log(e);
        const response = await axios.post ("http://localhost:3000/collaboration",
        objectExample);
        console.log(response);
    };
console.log(formikFamilies.values.family.livingInGroup)
    return (
        <div>
            <Formulario onSubmit={formikFamilies.handleSubmit}>
                <LabelForm htmlFor="family.name">
                   Nombre:
                </LabelForm>
                <InputForm placeholder="Zombis" onChange={formikFamilies.handleChange}
                value={formikFamilies.values.family.name} id="family.name" name="family.name"/>
                <LabelForm htmlFor="family.livingInGroup">
                   ¿Viven en grupo?: 
                </LabelForm>
                <InputForm type="checkbox" onChange={formikFamilies.handleChange}
                value={formikFamilies.values.family.livingInGroup} id="family.livingInGroup" name="family.livingInGroup"/>
                <LabelForm htmlFor="family.habitat">
                   Familia:
                </LabelForm>
                <InputForm placeholder="Zombis" onChange={formikFamilies.handleChange}
                value={formikFamilies.values.family.habitat} id="family.habitat" name="family.habitat"/>
                <LabelForm htmlFor="family.img">
                   Imagen:
                </LabelForm>
                <InputForm placeholder="https://i.imgur.com/mPFXuQm.png" onChange={formikFamilies.handleChange}
                value={formikFamilies.values.family.img} id="family.img" name="family.img"/>
                <LabelForm htmlFor="userName">
                   Tu nombre:
                </LabelForm>
                <InputForm placeholder="Steve" onChange={formikFamilies.handleChange}
                value={formikFamilies.values.userName} id="userName" name="userName"/>
                <LabelForm htmlFor="userEmail">
                   Tu email:
                </LabelForm>
                <InputForm placeholder="Steve@mojang.com" onChange={formikFamilies.handleChange}
                value={formikFamilies.values.userEmail} id="userEmail" name="userEmail"/>
                <BtnForm type="submit">
                    Enviar familia
                </BtnForm>
                <p>{message}</p>
                <p>{formikFamilies.values.family.name}</p>
                <p>{formikFamilies.values.family.family}</p>
                <ImgForm src={formikFamilies.values.family.img} alt={formikFamilies.values.family.name} />
                <p>¿Viven en grupo?: {formikFamilies.values.family.livingInGroup? "Si" : "No"}</p>
        </Formulario>
        </div>
    )
}

export default FormContributionFamily

