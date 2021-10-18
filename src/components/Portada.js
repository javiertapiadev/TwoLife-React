import React from 'react'
import { Card, Button, Container, Col, Row, Form } from 'react-bootstrap'
import '../css/portada.css';

export const Portada = () => {
    return (
        <div>
            <Container>
                <Row>
                <img src="https://4kwallpapers.com/images/walls/thumbs_3t/473.png" />
                <Button id="button-comprar">Comprar</Button>
                <Button id="button-vender">Vender</Button>
                </Row>
            </Container>
        </div>
    )
}
