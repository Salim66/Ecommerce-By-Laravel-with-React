import React, { Component } from 'react'
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/easyshop.png';

export class NavMenuDesktop extends Component {
  render() {
    return (
      <>
        <div className="TopSectionDown">
          <Navbar fixed={'top'} bg="light" className="navbar">
            <Container fluid={"true"} className="fixed-top p-2 mb-0 bg-white shadow-sm">
              <Row>

                <Col xl={4} lg={4} md={4} sm={12} xm={12}>
                  <Link to='/'><img className='nav-logo' src={Logo} alt="easylogo" /></Link>
                </Col>

                <Col className='p-1 mt-1' xl={4} lg={4} md={4} sm={12} xm={12}>
                  <div className="input-group w-100">
                    <input type="text" className='form-control' />
                    <Button type="button" className='btn site-btn'><i className='fa fa-search'></i></Button>
                  </div>
                </Col>

                <Col className='p-1 mt-1' xl={4} lg={4} md={4} sm={12} xm={12}>
                  <Link to='/' className='btn'><i className='fa fa-bell h4'></i><sup><span className='badge text-white bg-danger'>5</span></sup></Link>
                  <a href="#" className='btn'><i className='fa fa-mobile-alt h4'></i></a>
                  <Link to='/' className='btn h4'>LOGIN</Link>
                  <Button type="button" className='cart-btn'><i className='fa fa-shopping-cart'></i> 3 Items </Button>
                </Col>
                
              </Row>
            </Container>
          </Navbar>
        </div>
      </>
    )
  }
}

export default NavMenuDesktop