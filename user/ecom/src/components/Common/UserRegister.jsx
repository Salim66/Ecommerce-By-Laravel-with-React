import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from '../../assets/images/login.png';

export class UserRegister extends Component {
  render() {
    return (
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col lg={6} md={6} sm={12} s={12}>
                            <Form className="onboardForm">
                                <h4>USER SIGN UP</h4>
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Your Name' />
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Valid Email' />
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Your Password' />
                                <input type="text" className='form-control m-2' name="" placeholder='Confirm Your Password' />
                                <Button className='btn btn-block m-2 site-btn-login'>Sign UP</Button>

                                <br /><br />
                                <hr />
                                <p>Forget your password? <Link>Forget Password Link</Link></p>
                                <p>Already create an account? <Link to='/login'>Login you account</Link></p>
                                
                            </Form>
                        </Col>
                        <Col className='m-0 p-0 desktop' lg={6} md={6} sm={12} s={12}>
                            <img className='onboardBanner' src={Login} alt="forget" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
  }
};

export default UserRegister;