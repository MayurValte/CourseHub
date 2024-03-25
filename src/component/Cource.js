import axios from "axios";
import React from "react";
import base_url from "../api/bootapi";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";
import { toast } from "react-toastify";
const Cource = ({ cource, update }) => {
    const deleteCourse = (id) => {
        axios.delete(`${base_url}/deleteCourse/${id}`).then(
            (response) => {
                toast.success("Course Deleted Successfully");
                update(id);
            },
            (error) => {
                toast.error("Can't Delete Course");

            }
        );
    }
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">{cource.title}</CardSubtitle>
                <CardText>{cource.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={() => {
                        deleteCourse(cource.id);
                    }}>Delete</Button>
                    <Button color="warning" className="m-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
};
export default Cource;