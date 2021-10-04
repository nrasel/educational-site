import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container className="text-start py-5">
                <Row>
                    <Col>
                        <h3 >Overview</h3>
                        <Table striped bordered hover className="mt-4">
                            <thead>
                                <tr>

                                    <td>Founded</td>
                                    <td>2020</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>University Day</td>
                                    <td>Chancellor</td>
                                </tr>
                                <tr>
                                    <td> 5th June</td>
                                    <td>Mr. Md. Abdul Hamid Advocate
                                        Honorable President, The People's Republic of Bangladesh</td>
                                </tr>
                                <tr>
                                    <td >Vice-Chancellor</td>
                                    <td>Faculty</td>
                                </tr>
                                <tr>
                                    <td >Prof. Dr. M. Rostom Ali</td>
                                    <td>5 Faculties</td>
                                </tr>
                                <tr>
                                    <td >Departments</td>
                                    <td>Institutes</td>
                                </tr>
                                <tr>
                                    <td > 21 Departments</td>
                                    <td>0 Institutes</td>
                                </tr>
                                <tr>
                                    <td >Teachers</td>
                                    <td>179 Teachers</td>
                                </tr>
                                <tr>
                                    <td >Officers</td>
                                    <td>85 Officers</td>
                                </tr>
                                <tr>
                                    <td >Phone</td>
                                    <td>+880731 667424</td>
                                </tr>
                            </tbody>
                        </Table>
                        <h3 className="mt-4">Our Mission</h3>
                        <p className="mt-4">The general mission of Academy University is to establish the good academic public University in Bangladesh and also promote higher education at national as well as international level. However, some specific missions are:</p>
                        <li>Ensure need oriented and modern technology based education</li>
                        <li>Generate skilled and quality manpower in order to achieve knowledge and technology based society</li>
                        <li>Ensure quality and high standard educational environment</li>
                        <li>Undertake fundamental and applied research in relevant fields of human knowledge</li>
                        <li>Arrange seminars, conferences, workshops and training for teachers and staffs.</li>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default About;