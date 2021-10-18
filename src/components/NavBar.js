import React from 'react';
import { Link } from 'react-router-dom';

import {
  Col, Row, Button,
  Navbar, Nav, Container,
  NavDropdown, FormControl,
  InputGroup
} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'

import logo from '../images/logo.png';

export const NavBar = () => {
  return (
    <Container fluid>
      <Col>
        <Row>
          <Col sm={2}>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Logueado como: <a style={{color: "white"}} href="#login">Admin</a>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/myrequests">Mis solicitudes</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/myads">Mis anuncios</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
          </Col>
          <Col sm={5}>
            <InputGroup className="mb-3">
              <Button variant="outline-secondary" id="button-addon1">
                Button
              </Button>
              <FormControl
                placeholder="Buscar... ej: Call of Dutty"
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col sm={3}>
            <Button variant="danger" size="lg">Comprar</Button>
            <Button variant="outline-danger" size="lg">Vender</Button>
          </Col>
          <Col>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-center"
              />{' '}
              Two Life
            </Navbar.Brand>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Shopping</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Usados</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Nuevos</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">Recomendados</Nav.Link>
                    <Nav.Link href="#pricing">Recientes</Nav.Link>
                    <Nav.Link href="#pricing">Lanzamientos</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Col>
    </Container>
  )
}
