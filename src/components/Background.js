import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import '../css/background.css';
import raiser from '../images/raiser.png';

function Background(){
    return (
        <Container fluid id="brand">
            <Row id="imgContainer">
                <img src={raiser}  alt=""/>
            </Row>
            <Container className="center">
                <Button className="btn_blue" variant="primary">Comprar</Button>
                <Button className="btn_green" variant="success">Vender</Button>
            </Container>
        </Container>
    )
}

export default Background;