import  React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../css/RequestPage.css'
import RequestFilter from "./RequestFilter";


 class RequestPage extends React.Component{
 
  render(){
    return(
      <Container fluid>
        <Col className='header'>
          <h1>Mis solicitudes</h1>
        </Col>
       <Col>
        <Row  md={3} lg={4}>
          <RequestFilter></RequestFilter>
        </Row>
        <Row>
        
        </Row>
       </Col>
      </Container>
    )
  }
}

export default RequestPage
