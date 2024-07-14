"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">Variable width content</Col>
      </Row>
    </Container>
  );
}

export default Footer;
