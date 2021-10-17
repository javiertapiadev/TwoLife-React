import React from 'react';

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const AdCard = ({gameData})=>{

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

};

export default AdCard;