import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Login from '../../assets/images/login.png';

class UserLogin extends Component {
  render() {
    return (
      <>
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col lg={6} md={6} sm={12} s={12}>
                            <Form className="onboardForm">
                                <h4>USER SIGN IN</h4>
                                <h6>Please Enter Your Mobile Number</h6>
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Mobile Number' />
                                <Button className='btn btn-block m-2 site-btn-login'>Next</Button>
                            </Form>
                        </Col>
                        <Col className='m-0 p-0 desktop' lg={6} md={6} sm={12} s={12}>
                            <img className='onboardBanner' src={Login} alt="forget" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default UserLogin;