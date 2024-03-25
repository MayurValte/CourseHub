import React, { useState, useEffect } from "react";
import Cource from "./Cource";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcources = () => {
    useEffect(() => {
        document.title = "View all Courses || LearnReact";
    }, [])
    useEffect(() => {
        getAllCoursesFromServer();
    }, [])


    // function to call server
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/getCources`).then(
            (response) => {
                setCources(response.data);
                toast.success("Courses has been loaded");
                // toast.success("Courses has been loaded", {
                //     position: "bottom-center"
                // });

            },
            (error) => {
                toast.error("Courses Can't Feacted", {
                    position: "bottom-center"
                })
                console.log(error);
            }
        );
    };



    const [cource, setCources] = useState([]);

    const updateCourses = (id) => {
        setCources(cource.filter((c) => c.id != id));
    }

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of All of our Courses are as follows</p>
            {
                cource.length > 0 ? cource.map((item) => <Cource key={item.id} cource={item} update={updateCourses} />) : "No courses"
            }

        </div>
    )
}
export default Allcources;