import React from "react";
import EditCourse from "../EditCourse";
import Header from "../Header";
import { useCoursesHooks } from "../../hooks/useCourseHooks";

import { Title, GridCourses, Close, Cross, Plus } from "./EditCourses.styles";

import CrossIMG from "../../images/Cross.svg"
import PlusIMG from "../../images/Plus.svg"


import { Link } from "react-router-dom";

const Courses = () => {
    
    let data = useCoursesHooks()
    if (data === "Loading...") return <div>Loading...</div>
    console.log(data);
    return (
        <>
            <Header page="admin"/>
            <Close>
                <Link to="/courses">
                    <Cross>
                        <img src={CrossIMG} alt=""/>
                    </Cross>
                </Link>
            </Close>
            <Title>EDITOR DE CURSOS</Title>
            <Link to="/editcoursedata">
                <Plus src={PlusIMG}/>
            </Link>
            <GridCourses>
                {data.courses.map((course :any)  => (
                    <EditCourse
                        key = {course.id}
                        courseID = {course.id}
                        name = {course.name}
                        description = {course.description}
                    />
                ))}
            </GridCourses>
        </>
    );
};

export default Courses;
