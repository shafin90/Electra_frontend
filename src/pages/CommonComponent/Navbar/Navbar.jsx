import { Button, Col, Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";


function CustomNavbar() {
    return (
        <Navbar expand="lg" className=" bg-dark text-white">
            <Container>
                <Navbar.Brand href="#home" className=' text-white fs-2'>Electra</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className=' text-white'>Home</Nav.Link>
                        <Nav.Link href="#link" className=' text-white'>Contact</Nav.Link>
                        <Nav.Link href="#link" className=' text-white'>About</Nav.Link>
                        <Nav.Link href="#link" className=' text-white'>Sign Up</Nav.Link>
                    </Nav>

                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto" className=' d-flex justify-content-center align-items-center'>
                                <FaRegHeart className='fs-5 me-2' style={{ cursor: "pointer" }} />
                                <FiShoppingCart className='fs-5 ' style={{ cursor: "pointer" }} />
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;