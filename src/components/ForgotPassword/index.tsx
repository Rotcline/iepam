import React from "react";
import { Container, Texto, Cross } from "./ForgotPassword.styles";
import CrossIMG  from "../../images/Cross.svg";
import Header from "../Header";
import { Link } from "react-router-dom";

const ForgotPassword = () => {

    return(        
        <>
            <Header page="fp"/>
            <Container>
                <Link to="/resetpassword"><Cross src={CrossIMG} alt="Cross SVG"/></Link>
            </Container>
            <Texto>
                Se ha reenviado un enlace a tu correo para que reinicies tu contraseña
            </Texto>
        </>
    );
};

export default ForgotPassword;

