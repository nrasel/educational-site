import React from 'react';
import './Service.css'
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { img, instructor, tution_fee, title, duration, chairman } = props.service
    return (
        // all services
        <Col style={{ minHeight: '100%' }}>
            <Card className="card-design " style={{ minHeight: '100%' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body >
                    <Card.Title style={{color: '#777777'}}>{title}</Card.Title>
                    <Card.Title>Chairman : {chairman}</Card.Title>
                    <Card.Text>Teachers : {instructor}</Card.Text>
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