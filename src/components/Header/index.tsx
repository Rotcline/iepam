import React, { useEffect, useState } from "react";
import { ImgContainer, Logo, User, HeaderWrapper, Lock, UserContainer } from "./HeaderUser.styles";
import LogoIMG from "../../images/Logo.png";
import UserIMG from "../../images/User.png";
import LockIMG from "../../images/Lock.png";

import { Link } from "react-router-dom";
import { useGetUser } from "../../hooks/useFetchUser";

interface Props {
  page: string;
}


const Header: React.FC<Props> = ({page}) => {
    var userID = Number(window.localStorage.getItem("loggedUserID"));
    //console.log(userID);
    let data = useGetUser(userID);
    //console.log(data);
    if (data === "Loading..."){ return <div>Loading...</div> }
    if(data === "Error"){
        return (
            <>
                <HeaderWrapper>
                    <Link to="/courses">
                        <Logo src={LogoIMG} />
                    </Link> 
                </HeaderWrapper>
            </>
        )
    }
    return (
        <>
            <HeaderWrapper>
                {page === "fp" ?
                    <Link to="/">
                        <Logo src={LogoIMG} />
                    </Link> 
                :
                    <Link to="/courses">
                        <Logo src={LogoIMG} />
                    </Link> 
                }
                {data.user.role === "admin" ? 
                    <ImgContainer>
                        {page === "admin" ?
                            <Link to="/editadmin">
                                <Lock src={LockIMG} />
                            </Link>
                        :
                            <Link to="/editcourses">
                                <Lock src={LockIMG} />
                            </Link>
                        }
                        <Link to="/edituser">
                            <User src={UserIMG} />
                        </Link>
                    </ImgContainer> 
                :
                    <UserContainer>
                        <Link to="/edituser">
                            <User src={UserIMG} />
                        </Link>
                    </UserContainer>
                }
            </HeaderWrapper>
        </>
    )
}

export default Header;