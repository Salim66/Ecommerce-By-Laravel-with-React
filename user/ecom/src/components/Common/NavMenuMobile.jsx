import React, { Component } from 'react';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/easyshop.png';

export class NavMenuMobile extends Component {

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
          <Container fluid={"true"} className="fixed-top p-2 mb-0 bg-white shadow-sm">
            <Row>

              <Col xl={4} lg={4} md={4} sm={12} xm={12}>
                <Button type="button" onClick={ this.menuBarClickHandler } className='btn'><i className='fa fa-bars'></i></Button>
                <Link to='/'><img className='nav-logo' src={Logo} alt="easylogo" /></Link>
                <Button type="button" className='cart-btn'><i className='fa fa-shopping-cart'></i> 3 Items </Button>
              </Col>
              
            </Row>
          </Container>

          <div className={ this.state.sideNavState }>
            <hr className='w-80' />
            <div className="list-group">
              <a href="#" className='list-group-item nav-itemmenu list-group-item-action'><i className='fa fa-home mr-2'> Home </i></a>
            </div>
          </div>

          <div onClick={ this.contentOverlayClickHandler } className={ this.state.contentOverState }>

          </div>

        </div>
      </>
    )
  }
}

export default NavMenuMobile