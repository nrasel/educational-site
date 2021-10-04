import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container>
            <Row xs={1} md={4} className="g-3 my-4">
                {
                    services.map((service => <Service service={service}/>

                    ))
                }
            </Row>
        </Container>


    );
}

export default Services;