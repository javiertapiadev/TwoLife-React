import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import '../styles/portada.css';

export const Portada = () => {
    return (
        <div>
            <Container>
                <Row>
                <img src="https://4kwallpapers.com/images/walls/thumbs_3t/473.png" alt="" />
                <Button id="button-comprar">Comprar</Button>
                <Button id="button-vender">Vender</Button>
                </Row>
            </Container>
        </div>
    )
}
