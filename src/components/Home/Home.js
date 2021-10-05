import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import background from '../utilities/images/campus-building.jpg'
import './Home.css'

const Home = (props) => {
    // state
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./homeService.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // header background image
    const headerImage = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '70vh'
    }
    return (
        <div>
            {/* header section */}
            <div className="position-title" style={headerImage}>
                <div className="university-title">
                    <h1 className="title-fontSize">Academy University</h1>
                    <span className="lead">There is always something exciting happening in A.U</span>
                </div>
            </div>
            {
                // service section
                <div className="background-colure">
                    <Container>

                        <Row xs={1} md={4} className="g-3 py-5">
                            {
                                services.map((service => <Service service={service} />

                                ))
                            }
                        </Row>
                    </Container>
                </div>
            }

        </div>
    );
};

export default Home;