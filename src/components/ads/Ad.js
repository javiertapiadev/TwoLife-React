import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap'

function Ad({ad}) {
    return (
        <>
            <div className="container">
                <Row className="mt-5">
                    <Col sm={4}>
                        <Image src={ad.mainImgURL} alt="imagen principal" rounded />
                    </Col>
                    <Col>
                        <Row><h1>{ad.videogame.name}</h1></Row>
                        <ListGroup horizontal>
                            <ListGroup.Item variant="primary">
                                Lanzamiento: {ad.videogame.releaseDate.split('T')[0]}
                            </ListGroup.Item>
                            <ListGroup.Item variant="primary">Categoría edad: {ad.videogame.ageCategory}</ListGroup.Item>
                            <ListGroup.Item variant="primary">
                                Géneros: {ad.videogame.genre.join(', ')}
                            </ListGroup.Item>
                            <ListGroup.Item variant="primary">Consola: {ad.platform}</ListGroup.Item>
                            <ListGroup.Item variant="primary">Condición: {ad.condition}</ListGroup.Item>
                            <ListGroup.Item variant="primary">
                                Anunciante: {`${ad.advertiser.firstname} ${ad.advertiser.lastname}`}
                            </ListGroup.Item>
                        </ListGroup>
                        <div>
                            <div>
                                <h2>Description</h2>
                                <small>Publicado el {ad.createdAt.split('T')[0]}</small>
                            </div>
                            <p>{ad.description}</p>
                        </div>
                    </Col>
                </Row>

                <Row className="container mt-5">
                    <Col>
                        <Row className="mt-1">
                            <Col className="mt-1">
                                <Image src="https://picsum.photos/100" alt="imagen principal" rounded />
                            </Col>
                            <Col className="mt-1">
                                <Image src="https://picsum.photos/100" alt="imagen principal" rounded />
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col className="mt-1">
                                <Image src="https://picsum.photos/100" alt="imagen principal" rounded />
                            </Col>
                            <Col className="mt-1">
                                <Image src="https://picsum.photos/100" alt="imagen principal" rounded />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <p>${ad.price}</p>
                    </Col>
                    <Col>
                        <Button variant="primary" size="lg">Solicitar Juego</Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Ad