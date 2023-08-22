import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo/brand-logo.avif'
import Home from './Home';
import Community from './Community';
import Unta from './Market/Unta';
import Sapi from './Market/Sapi';
import Ayam from './Market/Ayam';
import Kambing from './Market/Kambing';
import HewanLain from './Market/HewanLain';

const NavigationBar = () => {
    return (
        <Router>
            <Navbar expand="lg" className="bg-body-tertiary mx-5 py-3">
                    <Container fluid>
                        <Navbar.Brand href="#home">
                            <img alt="" src={Logo} width="30" height="30" className="d-inline-block align-top me-3"/>
                            HewanKu
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <Nav.Link href="/">Beranda</Nav.Link>
                                <Nav.Link href="/community">Komunitas</Nav.Link>
                                <NavDropdown title="Beli Hewan" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/sapi">Sapi</NavDropdown.Item>
                                    <NavDropdown.Item href="/kambing">Kambing</NavDropdown.Item>
                                    <NavDropdown.Item href="/unta">Unta</NavDropdown.Item>
                                    <NavDropdown.Item href="/ayam">Ayam</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/hewan-lain">Cari Hewan Lain</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control type="search" placeholder="Cari Hewan" className="me-2" aria-label="Search" />
                                <Button variant="danger">Cari</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/community" element={<Community />}/>
                <Route path="/unta" element={<Unta />}/>
                <Route path="/sapi" element={<Sapi />}/>
                <Route path="/ayam" element={<Ayam />}/>
                <Route path="/kambing" element={<Kambing />}/>
                <Route path="/hewan-lain" element={<HewanLain />}/>
            </Routes>
        </Router>
    );
};

export default NavigationBar;