import React, { useState } from "react";
import { useGetUsers } from "../../hooks/useFetchUser";
import Header from "../Header";
import { ButtonContainer, Cross, Save, Wrapper } from "./RoleEditor.styles";
import { UPDATE } from "../../hooks/useFetchUser";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import CrossIMG from "../../images/Cross.svg"


const RoleEditor = () => {
    const data = useGetUsers();
    const [update] = useMutation(UPDATE);
    const [userID, setUserID] = useState(0)
    const [role, setRole] = useState('')

    var obj :any;
    if (data === "Loading..."){ return <div>Loading...</div> }
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const name  = e.currentTarget.name;
        const value = e.currentTarget.value;
        console.log(value);
        if (name === 'user') setUserID(Number(value));
        if (name === 'role') setRole(value);
    }
    return (
        <>
            <Header page=""/>
            <Link to="/editcourses">
                <Cross src={CrossIMG} alt=""/>
            </Link>
            <Wrapper>
                <select onChange={ e => handleSelect(e) } name='user' value={userID}>
                    {data.users.map((user :any)  => (
                        <option key={user.id} value = {user.id}>{user.email}</option>
                    ))}
                </select>

                <select onChange={ e => handleSelect(e) } name='role' value={role}>
                    <option value="admin">Administrador</option>
                    <option value="user">Usuario</option>
                    <option value="content">Creador de contenido</option>
                </select>
            </Wrapper>
            <ButtonContainer>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            update({ variables: {id: userID, role: role}})
                                    .then(data => obj = data).then( () =>{
                                        console.log(obj);
                                        window.location.reload();
                                    })
                        }}>
                            <Save type="submit">GUARDAR</Save>
                    </form>
            </ButtonContainer>
        </>
      );
}

export default RoleEditor;