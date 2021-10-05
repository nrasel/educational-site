import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="background-colure">

            <Container >
                {/* services */}
                <h2 className="pt-5" style={{ color: '#7777' }}>Our Available Services</h2>
                <Row xs={1} md={4} className="g-3 py-4">

                    {
                        services.map((service => <Service service={service} />

                        ))
                    }
                </Row>
            </Container>
        </div>


    );
}

export default Services;