import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Request from "./Request";

function RequestList(props) {
    return (
        <Container>
            <Stack gap={3}>
                {
                    props.list.map(request => (
                        <Request data={request} />
                    ))
                }
            </Stack>
        </Container>
    )
}

export default RequestList;