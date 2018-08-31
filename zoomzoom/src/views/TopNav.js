import React from 'react'
import { withRouter } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class NavBar extends React.Component {
  logInPaths = [
    '/dash',
    '/addform',
    '/logout'
  ]
  state = {
    isOpen: false,
    isLoggedIn: !!this.logInPaths.filter(item=>item === this.props.location.pathname)[0]
  }


  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    console.log(this.props)
    let linksToRender = this.state.isLoggedIn ? (
      <div>
      <NavItem>
        <a href="/dash" className="nav-link">Dash</a>
      </NavItem>
      <NavItem>
        <a href="/addform" className="nav-link">Everyday Entry</a>
      </NavItem>
      <NavItem>
        <a href="/logout" className="nav-link">Logout</a>
      </NavItem>
      </div>
    ):(
      <div>
      <NavItem>
        <a href="/login" className="nav-link">Login</a>
      </NavItem>
      <NavItem>
        <a href="/signup" className="nav-link">Signup</a>
      </NavItem>
    </div>)
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">ZOOMZOOM</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <a href="/" className="nav-link">Home</a>
            </NavItem>
            {linksToRender}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavBar);
