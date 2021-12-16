import { useEffect} from 'react'
import AdCard from './AdCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'


function AdsList(props){

    useEffect(() => { console.log(props)}, [])
        return (
            <>
                <Container className="mb-5" /*"bg-primary"*/ style={{ width: '90%' }}>
                    <Row xs="auto" md="auto" lg="auto" className="g-5">
                        {props.ads.map(ad => {
                            return <AdCard key={ad._id} ad={ad}/>
                        })}
                    </Row>
                </Container>
            </>
        );
    }

export default AdsList;