import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import './nav.css'
export const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand><Link className="item" to={"/"}>CMS App</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                            <Nav.Link><Link className="item"  to={"/addUser"}>Add User</Link></Nav.Link>
                            <NavDropdown title="About" id="navbarScrollingDropdown">
                                <NavDropdown.Item><Link className="item"  to={"/about"}>Developers</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link   className="item" to={"/aboutProject"}>About Project</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link >
                                <Link className="item"  to={"/contact"}>Contact us</Link>
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
