import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoHome from "./sources/logohome.png";


export default function NavBar(props) {
  const currAccName=window.localStorage.getItem("currName");
  const Navigate=useNavigate()

  const logOutHandler=()=>{
    localStorage.clear();
    Navigate("/");

  }
  return (
    
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="mb-5"
      
    >
      <Navbar.Brand as={Link} to="/home">
        <img
          src={logoHome}
          alt="Logo"
          width="250"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <NavDropdown title={currAccName} id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/about">
              About
            </NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logOutHandler}>LogOut</NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
        <Nav>
        <Button as={Link} to="/uploadPost" variant="primary" size="sm" className="mr-5">
          Add New Post
        </Button>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
