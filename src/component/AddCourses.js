import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
const AddCourses = () => {
    useEffect(() => {
        document.title = "Add Courses || LearnReact";
    })

    const [cource, setCources] = useState({});
    const handleForm = (e) => {
        postDatatoServer(cource);

        e.preventDefault();
    };

   

    const postDatatoServer = (data) => {
        axios.post(`${base_url}/saveCource`, data).then(
            (response) => {
                toast.success("Course Added Successfully");
                setCources({});
            }, (error) => {
                toast.error("Couldn't add Course");
            }
        )
    }
    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input type="text" placeholder="Enter Title Here" name="title" id="title"
                        onChange={(e) => {
                            setCources({ ...cource, title: e.target.value })
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" placeholder="Enter Description Here" name="description" id="description" style={{ height: 150 }}
                        onChange={(e) => {
                            setCources({ ...cource, description: e.target.value })
                        }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button type="reset" color="warning" className="m-2">Clear</Button>
                </Container>
            </Form>

        </Fragment >
    )
}
export default AddCourses;