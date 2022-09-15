import React, { Component } from 'react'
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/easyshop.png';

export class NavMenuDesktop extends Component {
  render() {
    return (
      <>
        <div className="TopSectionDown">
          <Navbar fixed={'top'} bg="light" className="navbar">
            <Container fluid={true}>
              <Row>
                <Col xl={4} lg={4} md={4} sm={12} xm={12}>
                  <Link to='/'><img className='nav-logo' src={Logo} alt="easylogo" /></Link>
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} xm={12}></Col>
                <Col xl={4} lg={4} md={4} sm={12} xm={12}></Col>
              </Row>
            </Container>
          </Navbar>
        </div>
      </>
    )
  }
}

export default NavMenuDesktop