import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";
const Home = () => {
    useEffect(() => {
        document.title = "Home || LearnReact";
    })
    return <div>
        <Container className="text-center bg-secondary bg-gradient bg-opacity-50">
            <h1>
                Hi this is Mayur Valte
            </h1>
            <p>
                This site is built by Mayur Valte as he
                trying to learn React JS
            </p>
            <Button color="primary">
                Start Using
            </Button>
        </Container>


    </div>
}
export default Home;