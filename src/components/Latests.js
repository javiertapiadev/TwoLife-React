import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../css/videogames.css';

function Latests(){
    return (
        <>
        <Container>
            <Row className="videogames">
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Super Mario Bros</Card.Header>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1612404459571-ccef4b6588e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80" />
                        <Card.Body>
                            <Card.Title>$100</Card.Title>
                            <Card.Text>
                                Usado
                            </Card.Text>
                            <Button variant="primary">Ver articulo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Donkey Kong</Card.Header>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1521484358791-8c8504da415e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" />
                        <Card.Body>
                            <Card.Title>$200</Card.Title>
                            <Card.Text>
                                Usado
                            </Card.Text>
                            <Button variant="primary">Ver articulo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Pes 2021</Card.Header>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlmYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title>$300</Card.Title>
                            <Card.Text>
                                Usado
                            </Card.Text>
                            <Button variant="primary">Ver articulo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Kirby</Card.Header>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1627855440427-55fc532a441f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                        <Card.Body>
                            <Card.Title>$400</Card.Title>
                            <Card.Text>
                                Usado   
                            </Card.Text>
                            <Button variant="primary">Ver articulo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Halo</Card.Header>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1552875101-979d61f26eb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
                        <Card.Body>
                            <Card.Title>$500</Card.Title>
                            <Card.Text>
                                Usado
                            </Card.Text>
                            <Button variant="primary">Ver articulo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Need for Speed</Card.Header>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1614483337880-199774f299b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmVlZCUyMGZvciUyMHNwZWVkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title>$600</Card.Title>
                            <Card.Text>
                                Usado
                            </Card.Text>
                            <Button variant="primary">Ver articulo</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
};

export default Latests;