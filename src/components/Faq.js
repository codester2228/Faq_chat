import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Accordion,
  Card,
  Button,
} from "react-bootstrap";

function Faq() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">My WebPage</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar navbar-expand-lg navbar-dark bg-dark ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Accordion className="my-5 ">
        <Container>
          <Card className="card text-white bg-dark mb-3">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Q1. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda consequuntur quidem, eaque molestias incidunt
                sapiente, nihil repudiandae iusto laborum, impedit earum dolore
                nostrum itaque dolor! Vitae quod accusantium corrupti optio.
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="card text-white bg-dark mb-3">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Q2. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda consequuntur quidem, eaque molestias incidunt
                sapiente, nihil repudiandae iusto laborum, impedit earum dolore
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Container>
      </Accordion>
    </div>
  );
}

export default Faq;
