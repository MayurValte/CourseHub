import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
const Menus = () => {
    return (
        // <ListGroup className="ms-5">
        //     <ListGroupItem tag="a" href="/" action>Home</ListGroupItem>
        //     <ListGroupItem tag="a" href="/add-course" action>Add Course</ListGroupItem>
        //     <ListGroupItem tag="a" href="/view-courses" action>View Course</ListGroupItem>
        //     <ListGroupItem tag="a" href="#!" action>About</ListGroupItem>
        //     <ListGroupItem tag="a" href="#!" action>Contact</ListGroupItem>
        // </ListGroup>
        <ListGroup className="ms-5">
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>View Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>About</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Contact</Link>
        </ListGroup>
    );
}
export default Menus;