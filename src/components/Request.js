import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/Request.css';

function Request({ data }) {
    return (
        <Card className="card">
            <Row>
                <Col>
                    <h2>{data.title}</h2>
                </Col>
                <Col className="body">
                        <p>{data.price}</p>
                        <p>{data.date}</p>
                        <p>{data.status}</p>
                </Col>
            </Row>
        </Card>
    )
}

export default Request;