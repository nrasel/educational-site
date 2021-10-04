import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { img, instructor, tution_fee, title, duration, chairman } = props.service
    return (
        <Col style={{ minHeight: '100%' }}>
            <Card style={{ minHeight: '100%' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>Chairman : {chairman}</Card.Title>
                    <Card.Title>Instructor : {instructor}</Card.Title>
                    <Card.Text>
                        Duration : {duration}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Tution Fee : ${tution_fee}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;