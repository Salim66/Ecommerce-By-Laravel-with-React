import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Forget from '../../assets/images/forget.jpg';

class ResetPassword extends Component {
  render() {
    return (
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col lg={6} md={6} sm={12} s={12}>
                            <Form className="onboardForm">
                                <h4>RESET PASSWORD</h4>
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Pincode' />
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Valid Email' />
                                <input type="text" className='form-control m-2' name="" placeholder='Enter New Password' />
                                <input type="text" className='form-control m-2' name="" placeholder='Confirm Your Password' />
                                <Button className='btn btn-block m-2 site-btn-login'>Reset</Button>

                            </Form>
                        </Col>
                        <Col className='m-0 p-0 desktop' lg={6} md={6} sm={12} s={12}>
                            <img className='onboardBanner' src={Forget} alt="forget" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
  }
};

export default ResetPassword;