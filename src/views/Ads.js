import { Component } from 'react';
import AdCard from '../components/AdCard';
import { NavBar } from '../components/NavBar'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

class Ads extends Component {
    state = {
        data: [
            {
                "id": 1,
                "name": "Mario Kart 8 Deluxe",
                "img": "https://m.media-amazon.com/images/I/71vF5KVcvqS._AC_SY500_.jpg",
                "price": "677",
                "platform": "Nintendo Switch"
            },
            {
                "id": 2,
                "name": "Lego: Star Wars",
                "img": "https://m.media-amazon.com/images/I/81EKEhkntuL._SL1500_.jpg",
                "price": "3474",
                "platform": "Xbox 360"
            },
            {
                "id": 3,
                "name": "WWE: SmackDown VS RAW 2011",
                "img": "https://m.media-amazon.com/images/I/91c30PneriL._AC_SX425_.jpg",
                "price": "607",
                "platform": "PS3"
            },
            {
                "id": 4,
                "name": "Lego: Indiana Jones",
                "img": "https://m.media-amazon.com/images/I/61Iu1g6bb8L._SY445_.jpg",
                "price": "374",
                "platform": "PS2"
            },
            {
                "id": 5,
                "name": "Red Dead Redemption 2",
                "img": "https://m.media-amazon.com/images/I/71RuJ6zBT1S._AC_SL1500_.jpg",
                "price": "1407",
                "platform": "Xbox One"
            },
            {
                "id": 6,
                "name": "Spider-Man: Miles Morales",
                "img": "https://m.media-amazon.com/images/I/71dtn2ZMs7L._SL1361_.jpg",
                "price": "1074",
                "platform": "PS4"
            }
        ]
    }

    render() {
        return (
            <>
                <NavBar />
                <Container className="mb-5" /*"bg-primary"*/ style={{ width: '90%' }}>
                    <Row xs="auto" md="auto" lg="auto" className="g-5">
                        {this.state.data.map(data => (
                            <AdCard gameData={data} key={data.id} />
                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}

export default Ads;