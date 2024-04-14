import {Navbar, Container, Nav} from "react-bootstrap"
const NavigationBar = () => {
    return (
       <Navbar>
        <Container >
            <Navbar.Brand>Bioskop ID</Navbar.Brand>
            <Nav>
                <Nav.Link>TRENDING</Nav.Link>
                <Nav.Link>SUPERHERO</Nav.Link>
            </Nav>
        </Container>
       </Navbar>
    )
}

export default NavigationBar;