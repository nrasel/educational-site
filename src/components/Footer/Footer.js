import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img2 from '../utilities/images/logo.jpg'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-background">
            <Container className="py-5">
                <Row>
                    <Col xs={12} md={3}>
                        <div className="text-color">
                            <h4 >Academics</h4>
                            <p>Undergraduate Studies</p>
                            <p>Graduate Studies</p>
                            <p>International Students</p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className="text-color">
                            <h4>Departments and Institutes</h4>
                            <p>Faculties</p>
                            <p>Departments</p>
                            <p>Institutes</p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className="text-color">
                            <h4>Support Offices</h4>
                            <p>DSW</p>
                            <p>Engineering Offices</p>
                            <p>DAERs</p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className="text-color">
                            <h4>Web Services</h4>
                            <p>BIIS </p>
                            <p>Downloadable Forms</p>
                            <p>Office 365</p>
                            <p> Notices</p>
                        </div>
                    </Col>
                </Row>
                <Row className="footerr-bottom d-flex align-items-center pt-4">
                    <Col xs={12} md={2}>
                        <div className="d-flex align-items-center ">
                            <img className="logo-img-footer me-3" src={img2} alt="" />
                            <h3 className="footer-name">A.U</h3>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className="footer-link">
                            <span>Research</span>
                            <span>Academics</span>
                            <span>Departments</span>
                            <span>Administration</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>2021 &copy;Academy University</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;