import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { NavBar } from './NavBar'
import RequestFilter from "./RequestFilter";
import RequestList from "./RequestList";

import '../styles/RequestPage.css'

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
      <>
        <NavBar />

        <Container fluid>
          <Row className='requests-header'>
            <h1>Mis solicitudes</h1>
          </Row>
          <Row>
            <Col md={3} lg={6}>
              <RequestFilter />
            </Col>
            <Col md={9} lg={6}>
              {
                (
                  this.state.requests
                  && this.state.requests.length > 0
                  && <RequestList list={this.state.requests} />
                ) || <p> No has hecho ninguna solicitud </p>
              }
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default RequestPage
