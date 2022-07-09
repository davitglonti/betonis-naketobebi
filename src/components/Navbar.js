import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
 const Navigationbar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          navbarScroll
        >
        </Nav>
        <div className="d-flex">
        <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action2">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action3">Another action</NavDropdown.Item>
            
          <NavDropdown.Divider />
          </NavDropdown>
          <Nav.Link href="#action5">Home</Nav.Link>
          <Nav.Link href="Catalog">სრული კატალოგი</Nav.Link>
          
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
export default Navigationbar