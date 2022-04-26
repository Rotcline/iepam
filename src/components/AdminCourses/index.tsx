import React from "react";
import Header from "../Header";
import CardAdminCourse from "../CardAdminCourse";
import { useCoursesHooks } from "../../hooks/useCourseHooks";
import { Title, GridCourses, Cross, Plus } from "./AdminCourses.styles";
import CrossIMG from "../../images/Cross.svg"
import PlusIMG from "../../images/Plus.svg"
import { Link } from "react-router-dom";

const AdminCourses = () => {
    let data = useCoursesHooks()
    if (data === "Loading...") return <div>Loading...</div>
    console.log(data);
    return (
        <>
            <Header page="admin"/>
            <Link to="/courses">
                <Cross src={CrossIMG} alt=""/>
            </Link>
            <Title>EDITOR DE CURSOS</Title>
            <Link to="/editcourses/new">
                <Plus src={PlusIMG}/>
            </Link>
            <GridCourses>
                {data.courses.map((course :any)  => (
                    <CardAdminCourse
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

export default AdminCourses;
