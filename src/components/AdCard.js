import React from 'react';

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

/*class AdCard extends React.Component {
  render(props) {
      return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={""} />
  <Card.Body>
    <Card.Title>{props[data].name}</Card.Title>
    <Card.Text>
      {"$157"}
    </Card.Text>
    <Button variant="primary">Más Información</Button>
  </Card.Body>
</Card>
      )
  }
}*/

const AdCard = ({gameData})=>{

  //CARD GRID
    return(
      <Col>
          <Card style={{ width: '12rem' }} className= "h-100">
          <Card.Img variant="top" src={gameData.img} /*style={{height: '100%'}}*//>
          <Card.Body >
            <Card.Title>{gameData.name}</Card.Title>
            <Card.Text>
              ${gameData.price}
            </Card.Text>
            <Button variant="primary">Más Información</Button>
          </Card.Body>
        </Card>
      </Col>

    );


    //CARD GROUP
    /*return(
          <Card style={{ width: '12rem' }}>
          <Card.Img variant="top" src={gameData.img} />
          <Card.Body>
            <Card.Title>{gameData.name}</Card.Title>
            <Card.Text>
              ${gameData.price}
            </Card.Text>
            <Button variant="primary">Más Información</Button>
          </Card.Body>
        </Card>
    );*/

};

export default AdCard;