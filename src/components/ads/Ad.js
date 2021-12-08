import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
import SingleImage from '../common/SingleImage'
import MultipleImages from '../common/MultipleImages'

function Ad({ad}) {
    return (
        <>
            <div className="container">
                <Row className="mt-5">
                    <Col sm={4}>
                        <SingleImage image={ad.mainImgURL} styles={{borderRadius: "15px"}}/>
                    </Col>
                    <Col>
                        <Row><h1>{ad.idVideogame.name}</h1></Row>
                        <ListGroup horizontal>
                            <ListGroup.Item variant="primary">
                                Lanzamiento: {ad.idVideogame.releaseDate.split('T')[0]}
                            </ListGroup.Item>
                            <ListGroup.Item variant="primary">Categoría edad: {ad.idVideogame.ageCategory}</ListGroup.Item>
                            <ListGroup.Item variant="primary">
                                Géneros: {ad.idVideogame.genre.join(', ')}
                            </ListGroup.Item>
                            <ListGroup.Item variant="primary">Consola: {ad.idPlatform.platform}</ListGroup.Item>
                            <ListGroup.Item variant="primary">Condición: {ad.condition}</ListGroup.Item>
                            <ListGroup.Item variant="primary">
                                Anunciante: {`${ad.idAdvertiser.firstname} ${ad.idAdvertiser.lastname}`}
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
                        <MultipleImages images={ad.optionalImgsURL}/>
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