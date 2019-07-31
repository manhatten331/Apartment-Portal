import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { CardBody, CardTitle, CardButton } from "../components/Card";
import { Jumpotron } from "../components/Jumbotron"
// import { Nav } from "../components/Nav"

class Portal extends Component {
    state = {

    }

    render() {
        return (
            <Container>
                {/* <Nav /> */}
                <Jumpotron>
                    Welcome Resident!
                </Jumpotron>
                <Row>
                    <Col className="col-sm-6">
                        <CardTitle>
                            <CardBody>
                                If you would like to see your monthly rent click below.
                            </CardBody>
                            <CardButton href="/">Make Payment</CardButton>
                        </CardTitle>
                    </Col>
                    <Col className="col-sm-6">
                        <CardTitle>
                            <CardBody>
                                If you need maintence service click below.
                            </CardBody>
                            <CardButton href="/">Maintence Request</CardButton>
                        </CardTitle>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Portal;