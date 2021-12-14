import { Component } from 'react';
import AdCard from './AdCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import axios from 'axios';
require('dotenv').config();
 

class AdsList extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            ads: [],
        }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/ads?populate=[videogame]`)
            .then(response => this.setState({ ads: response.data }))
            .catch(e => console.log(e))
    }

    render() {
        return (
            <>
                <Container className="mb-5" /*"bg-primary"*/ style={{ width: '90%' }}>
                    <Row xs="auto" md="auto" lg="auto" className="g-5">
                        {this.state.ads.map(ad => (
                            <AdCard data={ad} key={ad._id}/>
                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}

export default AdsList;