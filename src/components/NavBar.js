import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

class NavBar extends React.Component {

  
  render() {
    return (
      <Navbar className="navbar-dark" expand="md">
        <div className="container">
          <NavbarBrand>Confusion</NavbarBrand>

          <Nav className="order-last justify-content-end" navbar>
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Category</NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    )
  }
}

export default NavBar;