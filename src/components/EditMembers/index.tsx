import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import { ButtonContainer, Container, Cross, Save, SelectorWrapper, UserInCourse } from "./EditMember.styles";
import CrossIMG from "../../images/Cross.svg"
import { UPDATE, useGetUsers } from "../../hooks/useFetchUser";
import { useMutation } from "@apollo/client";

const EditMembers = () => {
    const data = useGetUsers();
    const [userID, setUserID] = useState(0)
    var obj :any;
    if (data === "Loading..."){ return <div>Loading...</div> }
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const name  = e.currentTarget.name;
        const value = e.currentTarget.value;
        console.log(value);
        if (name === 'user') setUserID(Number(value));
    }
     return(
        <>
            <Header page=""/>
            <Container>
                <SelectorWrapper>
                    <select onChange={ e => handleSelect(e) } name='user' value={userID}>
                        {data.users.map((user :any)  => (
                            <option key={user.id} value = {user.id}>{user.email}</option>
                        ))}
                    </select>
                    <Link to="/courses">
                        <Cross>
                            <img src={CrossIMG} alt=""/>
                        </Cross>
                    </Link>
                </SelectorWrapper>
                {data.users.map((user :any)  => (
                    <UserInCourse key = {user.id}>{user.email}</UserInCourse>
                ))}
                <ButtonContainer>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            /*update({ variables: {id:data.user.id , name: nameField, phone: phone, age: age, academiclevel: academicLevel, address: address, laboralxp: laboralXP}})
                                    .then(data => obj = data).then( () =>{
                                        console.log(obj);
                                        window.location.reload();
                                    })*/
                        }}>
                            <Save type="submit">GUARDAR</Save>
                    </form>
                </ButtonContainer>
            </Container>
        </>
    )
};

export default EditMembers;