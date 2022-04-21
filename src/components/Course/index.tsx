import React from "react";

import { Link } from "react-router-dom";
import { Wrapper, Image, Content } from "./Course.styles";
import DefaultIMG1 from "../../images/def1.jpeg"
import DefaultIMG2 from "../../images/def2.jpeg"
import DefaultIMG3 from "../../images/def3.jpeg"
import DefaultIMG4 from "../../images/def4.jpeg"
import DefaultIMG5 from "../../images/def5.jpeg"
import DefaultIMG6 from "../../images/def6.jpeg"
import DefaultIMG7 from "../../images/def7.jpeg"
import DefaultIMG8 from "../../images/def8.jpeg"
import DefaultIMG9 from "../../images/def9.jpeg"
import DefaultIMG10 from "../../images/def10.jpeg"


type Props = {
  courseID: number
  name: string
  description :string
};

const Course = ({ courseID, name, description }: Props) => {
    let DefImage
    if(courseID%10 === 1){DefImage = DefaultIMG1;}
    else if(courseID%10 === 2){DefImage = DefaultIMG2;}
    else if(courseID%10 === 3){DefImage = DefaultIMG3;}
    else if(courseID%10 === 4){DefImage = DefaultIMG4;}
    else if(courseID%10 === 5){DefImage = DefaultIMG5;}
    else if(courseID%10 === 2){DefImage = DefaultIMG6;}
    else if(courseID%10 === 2){DefImage = DefaultIMG7;} 
    else if(courseID%10 === 2){DefImage = DefaultIMG8;} 
    else if(courseID%10 === 2){DefImage = DefaultIMG9;}
    else if(courseID%10 === 2){DefImage = DefaultIMG10;}
    else{DefImage = DefaultIMG1;}
    return(
        <div>
            <Link to={`/${courseID}`}>
                <Wrapper>
                    <Image src={DefImage}/>
                    <Content>
                        <h1>{name}</h1>
                        <br/>
                        <div>{description}</div>
                    </Content>
                </Wrapper>
            </Link>
        </div>
    )
}
export default Course;