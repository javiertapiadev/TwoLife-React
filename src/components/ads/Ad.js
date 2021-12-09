import styled from 'styled-components'
import { SingleImage, MultipleImages } from '../common'
import './styles.css'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1000px) {
        max-height: 100vh;
    }
`

const DataContainer = styled.div`
    width: 100%;
    padding-top: 10px;
    margin-bottom: 10px;
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

const Price = styled.p`
    font-weight: bold;
    font-size: 60px;
    color: #5271FF;
`

function Ad({ad}) {
    return (
        <main style={{marginTop: "20px", marginBottom: "20px"}}>
            <Container>
                <div className="main-img">
                    <SingleImage image={ad.mainImgURL} styles={{borderRadius: "15px"}}/>
                </div>

                <div className="extra-imgs">
                    <MultipleImages images={ad.optionalImgsURL}/>
                </div>

                <div className="vdgm-data">
                    <h1>{ad.idVideogame.name}</h1>
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
                </div>
                
                <div className="description">
                    <div className="header">
                        <h2 style={{fontWeight: "bold", marginRight: "7px"}}>
                            Descripción
                        </h2>
                        <small style={{color: "#888"}}>
                            Publicado el {ad.createdAt.split('T')[0]}
                        </small>
                    </div>
                    <p>{ad.description}</p>
                </div>

                <div className="price">
                    <Price>${ad.price}</Price>
                    <button className="buy-btn">Solicitar juego</button>
                </div>
            </Container>
        </main>
    )
}

export default Ad