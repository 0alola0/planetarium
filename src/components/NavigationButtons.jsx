import React from 'react';
import { Route, Routes, Link} from 'react-router-dom'
import  Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import  Container  from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css"
import PLANETS from '../PLANETS.json'
import NavigationBtn from './NavigationBtn';

const NavigationButtons = () => {
  return (
    <div>
    <Navbar expand="sm">
      <Container>
        <Navbar.Brand>THE PLANETS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              {
                PLANETS.map(e => (
                    <Link to={"/"+e.name} key={e.name}><NavigationBtn name={e.name} color={e.color}/></Link>
                ))
              }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavigationButtons;
