import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function AppNav() {
  return (
    <React.Fragment>
      <Navbar className='mb-2 p-3' bg='light' varient='dark' expand='sm'>
        <Link className='navbar-brand' to='/'>
          <strong>ELITE CHASSIS INSPECTION SYSTEM</strong>
        </Link>
        <Navbar.Toggle aria-controls='books-navbar-nav' />
        <Navbar.Collapse id='books-navbar-nav'>
          <Nav className='mr-auto'>
            <NavLink
              exact
              to='/inspection'
              activeClassName='active'
              className='nav-link'
            >
              Inspection Form
            </NavLink>
            <NavLink
              exact
              to='/search'
              activeClassName='active'
              className='nav-link'
            >
              Search Chassis
            </NavLink>
            <NavLink
              exact
              to='/searchiep'
              activeClassName='active'
              className='nav-link'
            >
              Search IEP
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default AppNav;
