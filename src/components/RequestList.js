import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Request from "./Request";

class RequestList extends Component {

    state = {
        requests: [
            {
                title: "Call of Duty",
                price: "$200",
                date: "24/10/21",
                status: "Pendiente"
            },
            {
                title: "Battlefield",
                price: "$280",
                date: "13/10/21",
                status: "Aceptado"
            },
            {
                title: "Halo",
                price: "$310",
                date: "7/10/21",
                status: "Rechazado"
            }
        ]
    }

    render() {
        return (
            <Container>
                <Stack gap={3}>
                    {
                        this.state.requests.map(request => (
                            <Request data={request} />
                        ))
                    }
                </Stack>
            </Container>
        )
    }
}

export default RequestList;