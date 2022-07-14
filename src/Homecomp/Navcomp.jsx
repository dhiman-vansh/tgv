import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import logo from "../Assests/logo.png"
import "./Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Navcomp() {
  // const [show, setShow] = useState(false);
  // const showDropdown = (e)=>{
  //     setShow(!show);
  // }
  // const hideDropdown = e => {
  //     setShow(false);
  // }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="top" variant="light">
        <Container style={{ color: "white" }}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Navbar.Brand href="/">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="ms-auto"  >
              <Nav.Link href="/" style={{ color: "white" }}>Home</Nav.Link>
              <Nav.Link href="/gall" style={{ color: "white" }}>Gallery</Nav.Link>
              <Nav.Link href="/amen" style={{ color: "white" }}>Amenities</Nav.Link>
              {/* <NavDropdown title="Pricing"  id="collasible-nav-dropdown" 
      // show={show} onMouseEnter={showDropdown} 
      // onMouseLeave={hideDropdown}
      >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </NavDropdown> */}
              <Nav.Link href="/about" style={{ color: "white" }}>About Us</Nav.Link>
              <Nav.Link href="/contact" style={{ color: "white" }}>Contact Us</Nav.Link>
              {/* <Nav.Link href="/about" style={{color:"white"}}>Contact Us</Nav.Link> */}
              <Nav.Link href="/res" style={{ color: "white" }}>Bookings</Nav.Link>


            </Nav>
            <Nav>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}