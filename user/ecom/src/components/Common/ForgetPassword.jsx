import axios from 'axios';
import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppURL';
import Forget from '../../assets/images/forget.jpg';

class ForgetPassword extends Component {

    constructor(){
        super();
        this.state = {
          email: "",
          message: ""
        }
    }
    
    formSubmit = (e) => {
        e.preventDefault();
    
        const data = {
          email: this.state.email
        }
    
        axios.post(AppURL.userForgetPassword, data)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
    
    }

  render() {
    return (
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col lg={6} md={6} sm={12} s={12}>
                            <Form onSubmit={ this.formSubmit } className="onboardForm">
                                <h4>FORGET YOUR PASSWORD</h4>
                                <input type="email" className='form-control m-2' name="email" placeholder='Enter Valid Email' onChange={(e) => this.setState({email:e.target.value})} />
                                <Button type='submit' className='btn btn-block m-2 site-btn-login'>Forget Password</Button>
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
}

export default ForgetPassword;