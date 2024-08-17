import React from 'react';
import Menu from './Menu/Menu';
import Carousal from './Carousal/Carousal';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container className=' my-5'>
            <Row >

                <Col md={4}>
                    <Menu />
                </Col>

                <Col md={8}>
                    <Carousal />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;