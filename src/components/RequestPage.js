import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import RequestFilter from "./RequestFilter";
import RequestList from "./RequestList";

import '../css/RequestPage.css'

class RequestPage extends React.Component {
  state = {
    requests: [
      {
        title: "Call of Duty",
        price: "$200",
        date: "24/10/21",
        status: "Pendiente"
      },
      {
        title: "Battlefield",
        price: "$280",
        date: "13/10/21",
        status: "Aceptado"
      },
      {
        title: "Halo",
        price: "$310",
        date: "7/10/21",
        status: "Rechazado"
      }
    ]
  }

  render() {
    return (
      <Container fluid>
        <Row className='requests-header'>
          <h1>Mis solicitudes</h1>
        </Row>
        <Row>
          <Col md={3} lg={6}>
            <RequestFilter />
          </Col>
          <Col md={9} lg={6}>
            <RequestList list={this.state.requests}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default RequestPage
