import { Navbar, Nav, Container,NavDropdown } from "react-bootstrap"
import logo from "../Assests/logo.png"
import { useState } from "react";
import "./Home.css"

export default function Navcomp() {
  // const [show, setShow] = useState(false);
  // const showDropdown = (e)=>{
  //     setShow(!show);
  // }
  // const hideDropdown = e => {
  //     setShow(false);
  // }
    return(
        <>
        <Navbar collapseOnSelect expand="lg" className="top" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
    <img src={logo} />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto" >
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/galler">Gallery</Nav.Link>
      <NavDropdown title="Pricing" id="collasible-nav-dropdown" 
      // show={show} onMouseEnter={showDropdown} 
      // onMouseLeave={hideDropdown}
      >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/about">Abour Us</Nav.Link>
    </Nav>
    <Nav>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}