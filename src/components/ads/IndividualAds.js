import React from 'react'
import { useParams } from 'react-router'
import { getAdsById } from '../../selector/getAdsById'
import { NavBar } from '../NavBar'
import {Row, Col, ListGroup, Image, Button} from 'react-bootstrap'

export const IndividualAds = () => {

const {adsId} = useParams()

const ad = getAdsById(adsId)

    return (
        <>
        <NavBar/>
        <div className="container">
            <Row className="mt-5">
                <Col sm={4}>
                    <Image src="https://picsum.photos/200" alt="imagen principal" rounded/>                   
                </Col>
                <Col>
                    <Row><h1>Nombre Videojuego</h1></Row>
                    <ListGroup horizontal>
                    <ListGroup.Item variant="primary">Característica 1</ListGroup.Item>
                    <ListGroup.Item variant="primary">Característica 2</ListGroup.Item>
                    <ListGroup.Item variant="primary">Característica 3</ListGroup.Item>
                    <ListGroup.Item variant="primary">Característica 4</ListGroup.Item>
                    </ListGroup>
                    <p>
                        <h3>Description</h3>
                        Culpa ex voluptate quis et commodo consectetur est deserunt fugiat labore voluptate esse dolor anim. Quis do quis irure enim nisi nostrud ad eu ad. Nostrud qui sit adipisicing do sit ut occaecat enim laborum dolor deserunt magna pariatur id. Voluptate culpa enim eu Lorem.
                    </p>
                </Col>           
            </Row>

            <Row className="container mt-5">
                <Col>
                    <Row className="mt-1">
                        <Col  className="mt-1">
                        <Image src="https://picsum.photos/100" alt="imagen principal" rounded/>                   
                        </Col>
                        <Col  className="mt-1">
                        <Image src="https://picsum.photos/100" alt="imagen principal" rounded/>                   
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col  className="mt-1">
                        <Image src="https://picsum.photos/100" alt="imagen principal" rounded/>                   
                        </Col>
                        <Col  className="mt-1">
                        <Image src="https://picsum.photos/100" alt="imagen principal" rounded/>                   
                        </Col>
                    </Row>
                </Col>
                <Col>
                <h1>$$$</h1>
                </Col>
                <Col>
                <Button variant="primary" size="lg">Solicitar Juego</Button>
                </Col>
            </Row>
        </div>

        </>
    )
}
