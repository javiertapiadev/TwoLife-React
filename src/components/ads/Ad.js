import styled from 'styled-components'
import Media from 'react-media';

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
        max-height: 100vh; // 556px
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

const NoImgs = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    & p {
        font-style: italic;
        color: #777;
    }
    
    @media (min-width: 1000px) {
        height: 250px;
        width: 250px;
    }
`

function Ad({ad}) {
    return (
        <main style={{marginTop: "35px", marginBottom: "35px"}}>
            <Container>
                <div className={`main-img ${ad.optionalImgsURL.length < 3 ? "large" : ""}`}>
                    <SingleImage image={ad.mainImgURL} styles={{borderRadius: "15px"}}/>
                </div>

                <div className="extra-imgs">
                    { ad.optionalImgsURL.length > 0 ?
                        <Media queries={{
                            two: "(max-width: 599px) or (min-width: 1000px)",
                            three: "(min-width: 600px) and (max-width: 756px)",
                            four: "(min-width: 757px) and (max-width: 999px)",
                        }} >
                            {matches => (
                                <>
                                    {matches.two && 
                                    <MultipleImages images={ad.optionalImgsURL} cols={2}/>}

                                    {matches.three &&
                                    <MultipleImages images={ad.optionalImgsURL} cols={3}/>}

                                    {matches.four &&
                                    <MultipleImages images={ad.optionalImgsURL} cols={4}/>}
                                </>
                            )}
                        </Media> :
                        <NoImgs> <p>No hay imágenes extra</p> </NoImgs>
                    }
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