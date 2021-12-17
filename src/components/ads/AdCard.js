import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const AdCard = (props)=>{
    return(
      <Col>
          <Card style={{ width: '12rem' }} className= "h-100">
          <Card.Img variant="top" src={props.ad.mainImgURL} /*style={{height: '100%'}}*//>
          <Card.Body /*className= "h-100"*/>
            <Card.Title>{props.ad.idVideogame.name}</Card.Title>
            <Card.Text>
              ${props.ad.price}
            </Card.Text>
            {/*<Button variant="primary">Más Información</Button>*/}
          </Card.Body>
          <Card.Footer>
            <Link to={`/ads/${props.ad._id}`}>
            <Button variant="primary">Ver</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>

    );

};

export default AdCard;