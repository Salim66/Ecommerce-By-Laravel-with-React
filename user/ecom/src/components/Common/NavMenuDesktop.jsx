import React, { Component } from 'react'
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/easyshop.png';
import MegaMenuAll from '../Home/MegaMenuAll';
import Bars from '../../assets/images/bars.png';

export class NavMenuDesktop extends Component {

  constructor(){
    super();
    this.state = {
      sideNavState: "sideNavClose",
      contentOverState: "ContentOverlayClose"
    }
  }


  menuBarClickHandler = () => {
    this.sideNavOpenClose();
  }

  contentOverlayClickHandler = () => {
    this.sideNavOpenClose();
  }

  sideNavOpenClose = () => {
    let sideNavState = this.state.sideNavState;
    let contentOverState = this.state.contentOverState;

    if(sideNavState === "sideNavOpen"){
      this.setState({ sideNavState: "sideNavClose", contentOverState: "ContentOverlayClose" });
    }else {
      this.setState({ sideNavState: "sideNavOpen", contentOverState: "ContentOverlayOpen" });
    }
  }

  render() {
    return (
      <>
        <div className="TopSectionDown">
          <Navbar fixed={'top'} bg="light" className="navbar">
            <Container fluid={"true"} className="fixed-top p-2 mb-0 bg-white shadow-sm">
              <Row>

                <Col xl={4} lg={4} md={4} sm={12} xm={12}>
                  <img onClick={ this.menuBarClickHandler } src={Bars} className='bar-img' alt="Bars" />
                  <Link to='/'><img className='nav-logo' src={Logo} alt="easylogo" /></Link>
                </Col>

                <Col className='p-1 mt-1' xl={4} lg={4} md={4} sm={12} xm={12}>
                  <div className="input-group w-100">
                    <input type="text" className='form-control' />
                    <Button type="button" className='btn site-btn'><i className='fa fa-search'></i></Button>
                  </div>
                </Col>

                <Col className='p-1 mt-1' xl={4} lg={4} md={4} sm={12} xm={12}>
                  <Link to='/favourite' className='btn'><i className='fa fa-heart h4'></i><sup><span className='badge text-white bg-danger'>5</span></sup></Link>
                  <Link to='/notification' className='btn'><i className='fa fa-bell h4'></i><sup><span className='badge text-white bg-danger'>5</span></sup></Link>
                  <a href="#" className='btn'><i className='fa fa-mobile-alt h4'></i></a>
                  <Link to='/login' className='btn h4'>LOGIN</Link>
                  <Button type="button" className='cart-btn'><i className='fa fa-shopping-cart'></i> 3 Items </Button>
                </Col>
                
              </Row>
            </Container>

            
            <div className={ this.state.sideNavState }>
              <MegaMenuAll />
            </div>

            <div onClick={ this.contentOverlayClickHandler } className={ this.state.contentOverState }>

            </div>

          </Navbar>
        </div>
      </>
    )
  }
}

export default NavMenuDesktop