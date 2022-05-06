import React, { useState } from "react";
import Header from "../Header";
import CrossIMG from "../../images/Cross.svg"
import { Link } from "react-router-dom";
import CourseField from "../CourseField";
import SlideEditor from "../SlideEditor";
import { Cross } from "./CourseEditor.styles";

const CourseEditor = () => {
    const [isCourse, setIsCourse] = useState(true)
    const handleBack =()=>{setIsCourse(true)}
    const handleNext = () => { setIsCourse(false) }

    return (
        <>
            <Header page=""/>
            <Link to={"/editcourses"}>
                <Cross src={CrossIMG} />
            </Link>
            {isCourse ? 
                <CourseField callback={handleNext}/>
                :
                <SlideEditor callback={handleBack}/>
            }
        </>
    );
}

export default CourseEditor;