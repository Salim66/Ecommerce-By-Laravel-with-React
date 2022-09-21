import React, { Component } from 'react'
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import Logo from '../../assets/images/easyshop.png';
import MegaMenuAll from '../Home/MegaMenuAll';
import Bars from '../../assets/images/bars.png';

export class NavMenuDesktop extends Component {

  constructor(){
    super();
    this.state = {
      sideNavState: "sideNavClose",
      contentOverState: "ContentOverlayClose",
      searchKey: "",
      searchRedirectStatus: false
    }
    this.searchOnChange = this.searchOnChange.bind(this);
    this.searchOnClick = this.searchOnClick.bind(this);
    this.searchRedirect = this.searchRedirect.bind(this);
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

  // search on change event
  searchOnChange(e){
    let searchKey = e.target.value;
    this.setState({ searchKey: searchKey });
  }

  // search on submit button event
  searchOnClick() {
    if(this.state.searchKey.length >= 2){
      this.setState({ searchRedirectStatus: true });
    }
  }

  // search form function whern searchredirectstatus is true
  searchRedirect(){
    if(this.state.searchRedirectStatus === true){
      return <Navigate to={"/searchbykey/"+this.state.searchKey} />
      
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
                    <input type="text" className='form-control' onChange={ this.searchOnChange } />
                    <Button onClick={ this.searchOnClick } type="button" className='btn site-btn'><i className='fa fa-search'></i></Button>
                  </div>
                </Col>

                <Col className='p-1 mt-1' xl={4} lg={4} md={4} sm={12} xm={12}>
                  <Link to='/favourite' className='btn'><i className='fa fa-heart h4'></i><sup><span className='badge text-white bg-danger'>5</span></sup></Link>
                  <Link to='/notification' className='btn'><i className='fa fa-bell h4'></i><sup><span className='badge text-white bg-danger'>5</span></sup></Link>
                  <a href="#" className='btn'><i className='fa fa-mobile-alt h4'></i></a>
                  <Link to='/login' className='btn h4'>LOGIN</Link>
                  <Link to="/cart" type="button" className='cart-btn'><i className='fa fa-shopping-cart'></i> 3 Items </Link>
                </Col>
                
              </Row>
              {this.searchRedirect() }
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