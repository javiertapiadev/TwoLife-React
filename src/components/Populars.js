import React from 'react';
import { Carousel, Badge, Container } from 'react-bootstrap';


function Populars(){
    return (
        <>
        <Container fluid style={{ display: "flex", justifyContent:"center", alignItems:"center" }}>
        <h2>
            <Badge bg="secondary">Populares</Badge>
        </h2>
        </Container>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="First slide"
                />
            <Carousel.Caption>
                <h3>Street Fighter</h3>
                <p>El mejor juego de peleas</p>
            </Carousel.Caption>
            </Carousel.Item>
        <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1566577134669-e1e944d0ae11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                alt="Second slide"
                />
            <Carousel.Caption>
                <h3>Metroid</h3>
                <p>Un guerrero espacial.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1566577134624-6f6cc4bb272b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                alt="Third slide"
        />
        <Carousel.Caption>
            <h3>The Legend of Zelda</h3>
            <p>Salva a la princesa zelda con la ayuda de link</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </>
    )
}

export default Populars;