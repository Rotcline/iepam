import React, { useEffect, useState } from "react";

import Header from "../Header"
import { Container, Cross, FormXP, FormLevel, FormName, FormPhone, ButtonContainer, Save, Title, CajaTexto } from "./UserData.styles";
import CrossIMG from "../../images/Cross.svg"

import { Link } from "react-router-dom";
import { UPDATE, useGetUser } from "../../hooks/useFetchUser";
import { useMutation } from "@apollo/client";


const UserData = () => {
    var userID = Number(window.localStorage.getItem("loggedUserID"));
    //console.log(userID);
    const data = useGetUser(userID);
    var obj: any;
    const [nameField, setNameField] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [academicLevel, setAcademicLevel] = useState('');
    const [age, setAge] = useState('');
    const [laboralXP, setLaboralXP] = useState('');
    const [update] = useMutation(UPDATE);


    useEffect(() => {
        if (data !== "Loading...") {
            console.log("sjaosald")
            if (data.user.name) { setNameField(data.user.name); }
            if (data.user.phone) { setPhone(data.user.phone); }
            if (data.user.address) { setAddress(data.user.address); }
            if (data.user.academiclevel) { setAcademicLevel(data.user.academiclevel); }
            if (data.user.age) { setAge(data.user.age); }
            if (data.user.laboralxp) { setLaboralXP(data.user.laboralxp); }

        }
    }, [data])
    if (data === "Loading...") { return <div>Loading...</div> }


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'name') setNameField(value);
        if (name === 'phone') setPhone(value);
        if (name === 'address') setAddress(value);
        if (name === 'academicLevel') setAcademicLevel(value);
        if (name === 'age') setAge(value);
    };
    const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'laboralXP') setLaboralXP(value);
    };

    return (
        <>
            <Header page="" />
            <Title>TUS DATOS</Title>
            <Container>
                <Link to="/courses">
                    <Cross src={CrossIMG} alt="" />
                </Link>
                <FormName>
                    <input type="text"
                        value={nameField}
                        name='name'
                        onChange={handleInput}
                        placeholder="Nombre Completo" />
                </FormName>

                <FormPhone>
                    <input type="text"
                        value={phone}
                        name='phone'
                        onChange={handleInput} placeholder="Tel??fono" />
                    <input type="text"
                        value={address}
                        name='address'
                        onChange={handleInput} placeholder="Direcci??n" />
                </FormPhone>

                <FormLevel>
                    <input type="text"
                        value={academicLevel}
                        name='academicLevel'
                        onChange={handleInput}
                        placeholder="Nivel Acad??mico" />
                    <input type="text"
                        value={age}
                        name='age'
                        onChange={handleInput}
                        placeholder="Edad" />
                </FormLevel>

                <FormXP>
                    <CajaTexto
                        value={laboralXP}
                        name='laboralXP'
                        onChange={handleTextArea}
                        placeholder="Experiencia Laboral" />
                </FormXP>
                <ButtonContainer>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            update({ variables: { id: data.user.id, name: nameField, phone: phone, age: age, academiclevel: academicLevel, address: address, laboralxp: laboralXP } })
                                .then(data => obj = data).then(() => {
                                    console.log(obj);
                                    window.location.reload();
                                })
                        }}>
                        <Save type="submit">GUARDAR</Save>
                    </form>
                </ButtonContainer>
            </Container>
        </>
    )
};
export default UserData;