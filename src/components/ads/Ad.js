import { Row, Col, Button } from 'react-bootstrap'
import {SingleImage, MultipleImages} from '../common'
import styled from 'styled-components'

const DataContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const DataItem = styled.p`
    width: max-content;
    max-width: max-content;
    padding: 5px 10px;
    border-radius: 5px;
    margin-left: 5px;
    margin-right: 5px;
    background-color: #5271FF;
    color: white;

    @media (min-width: 1000px) {
    flex-basis: 50%;
    }
` 
const DataName = styled.span`
    font-weight: bold;
`

function Ad({ad}) {
    return (
        <>
            <div className="container">
                <Row className="mt-5">
                    <Col sm={4}>
                        <SingleImage image={ad.mainImgURL} styles={{borderRadius: "15px"}}/>
                    </Col>
                    <Col>
                        <Row> <h1>{ad.idVideogame.name}</h1> </Row>
                        <DataContainer>
                            <DataItem>
                                <DataName>Lanzamiento: </DataName>
                                {ad.idVideogame.releaseDate.split('T')[0]}
                            </DataItem>
                            <DataItem>
                                <DataName>Categoría: </DataName>
                                {ad.idVideogame.ageCategory}
                            </DataItem>
                            <DataItem>
                                <DataName>Géneros: </DataName>
                                {ad.idVideogame.genre.join(', ')}
                            </DataItem>
                            <DataItem>
                                <DataName>Consola: </DataName>
                                {ad.idPlatform.platform}
                            </DataItem>
                            <DataItem>
                                <DataName>Condición: </DataName>
                                {ad.condition}
                            </DataItem>
                            <DataItem>
                                <DataName>Anunciante: </DataName>
                                {`${ad.idAdvertiser.firstname} ${ad.idAdvertiser.lastname}`}
                            </DataItem>
                        </DataContainer>
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