import React from "react";
import { Card, CardBody } from "reactstrap";

function Header() {
    return (
        <div>
            <Card className="my-2 bg-warning me-5 ms-5">
                <CardBody>
                    <h1 className="text-center my-3">Welcome to Cource Application</h1>
                </CardBody>
            </Card>
        </div>
    )
}
export default Header;