import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Apple from '../../assets/images/apple.png';
import Google from '../../assets/images/google.png';

export class FooterMobile extends Component {
  render() {
    return (
      <>
        <div className='footerback m-0 mt-5 pt-3 shadow-sm'>
          <Container className='text-center'>
            <Row className='px-0 py-5'>
              <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>OFFICE ADDRESS</h5>
                <p>Paglapir, Rangpur-5400, Bangladesh <br/>
                  Email: salimhasanriad@gmail.com
                </p>
                <h5 className='footer-menu-title'>SOCIAL LINK</h5>
                <a href="#"><i className='fab m-1 h4 fa-facebook'></i></a>
                <a href="#"><i className='fab m-1 h4 fa-instagram'></i></a>
                <a href="#"><i className='fab m-1 h4 fa-twitter'></i></a>
                <a href="#"><i className='fab m-1 h4 fa-likedin'></i></a>
              </Col>
              <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>DOWNLOAD APPS</h5>
                <a href="#"><img src={Apple} alt="" /></a>
                <a href="#"><img className='mt-2' src={Google} alt="" /></a>
                <br/>
                Choose Your Language 
                <div id='google_translate_element'></div>
              </Col>
            </Row>
          </Container>

          <Container fluid={'true'} className='bg-dark m-0 pt-3 pb-1 text-center'>
            <Container>
              <Row>
                <h6 className="text-white">© Copyright 2022 by Easy Shop, All Rights Reserved</h6>
              </Row>
            </Container>
          </Container>

        </div>
      </>
    )
  }
}

export default FooterMobile