import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../css/RequestPage.css'
import RequestFilter from "./RequestFilter";


class RequestPage extends React.Component {

  render() {
    return (
      <Container fluid>
        <Row className='header'>
          <h1>Mis solicitudes</h1>
        </Row>
        <Row>
          <Col md={3} lg={4}>
            <RequestFilter></RequestFilter>
          </Col>
          <Col>

          </Col>
        </Row>
      </Container>
    )
  }
}

export default RequestPage
