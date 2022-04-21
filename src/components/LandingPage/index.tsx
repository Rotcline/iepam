import React from "react";
import { useState } from "react";
import { ButtonsBox, Container, HomeImg, Email, Header, LoginButton, ForgotPasswordButton,RegisterButton, Password, ErrorBox } from "./LandingPage.styles";
import { useNavigate } from 'react-router-dom';


import Logo from "../../images/FullLogo.png"
import Background from "../../images/Background.jpeg"
import { REGISTER, LOGIN } from "../../hooks/useSessionHooks";
import { useMutation } from "@apollo/client";

import { Link } from "react-router-dom";


const LandingPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('Verifique los datos ingresados')
    const [register] = useMutation(REGISTER);
    const [login] = useMutation(LOGIN);
    var obj :any;
    var user :any;
    const navigate = useNavigate();
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name  = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const validateInputs = () =>{
        if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email) === false){
            setError(true);
            setErrorMsg('Ingrese un email valido')
            return false;

        }
        if(!(password.length > 7 && password.length < 17)){
            setError(true);
            setErrorMsg('Ingrese una contraseña valida')
            return false;
        }
        return true;
    };

    return(  
        <>
            <Container>
                <Header>
                    <img src={Logo} alt="IEPAM LOGO"/>
                </Header>

                    <Email>
                        <input type="text"
                            value={email}
                            name='email'
                            onChange={handleInput} 
                            placeholder="Correo electronico"/>
                    </Email>

                    <Password>
                        <input type="password"
                            value={password}
                            name='password'
                            onChange={handleInput} 
                            placeholder="Contraseña"/>
                    </Password>
                    <ErrorBox error={error}>{errorMsg}</ErrorBox>
                    <ButtonsBox>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                setError(false);
                                login({ variables: { email: email, password: password } })
                                .then(data => obj = data).then( () =>{
                                    console.log(obj.data.login);
                                    if(obj.data.login !== "Error"){
                                        window.localStorage.setItem(
                                            'loggedUserID', obj.data.login
                                        )
                                        navigate('/courses');
                                    }
                                    else{
                                        setErrorMsg('Verifique los datos ingresados')
                                        setError(true);
                                    }
                                });
                        }}>
                            <LoginButton type="submit">INICIAR SESIÓN</LoginButton>
                        </form>
                        <Link to="forgotpassword">
                            <ForgotPasswordButton>OLVIDE MI CONTRASEÑA</ForgotPasswordButton>
                        </Link>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                console.log(error);
                                setError(false);
                                if(validateInputs() === true){
                                    register({ variables: { email: email, password: password } })
                                    .then(data => obj = data).then( () =>{
                                        console.log(obj.data.register);
                                        if(obj.data.register !== "Error"){
                                            window.localStorage.setItem(
                                                'loggedUserID', obj.data.register
                                            )
                                            navigate('/courses');
                                        }
                                        else{
                                            setErrorMsg('Verifique los datos ingresados')
                                            setError(true);
                                        }
                                    });
                                }
                        }}>
                            <RegisterButton type="submit">REGISTRATE</RegisterButton>
                        </form>
                    </ButtonsBox>
                <HomeImg src ={Background} alt="background"/>
            </Container>
        </>
    )
};

export default LandingPage;