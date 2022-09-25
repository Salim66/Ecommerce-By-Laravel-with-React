import axios from 'axios';
import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppURL';
import Forget from '../../assets/images/forget.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        //   console.log(res);
          toast.success(res.data.message, {
            position: "top-right"
          });
        })
        .catch(error => {
            toast.error(error.response.data.message, {
                position: "top-right"
            });
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
            <ToastContainer />
        </Container>
    )
  }
}

export default ForgetPassword;