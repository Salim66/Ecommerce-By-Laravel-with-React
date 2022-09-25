import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppURL';
import Forget from '../../assets/images/forget.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

class ResetPassword extends Component {

    constructor(){
        super();
        this.state = {
          token: "",
          email: "",
          password: "",
          password_confirmation: "",
          message: ""
        }
    }
    
    formSubmit = (e) => {
        e.preventDefault();
    
        const data = {
          token: this.state.token,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
        }
    
        axios.post(AppURL.userResetPassword, data)
        .then(res => {
        // console.log(res);
          toast.success(res.data.message, {
            position: "top-right"
          });
          document.getElementById('resetPassword').reset();
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
                            <Form onSubmit={ this.formSubmit } className="onboardForm" id="resetPassword">
                                <h4>RESET PASSWORD</h4>
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Pincode' onChange={(e) => this.setState({token:e.target.value})} />
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Valid Email' onChange={(e) => this.setState({email:e.target.value})} />
                                <input type="text" className='form-control m-2' name="" placeholder='Enter New Password' onChange={(e) => this.setState({password:e.target.value})} />
                                <input type="text" className='form-control m-2' name="" placeholder='Confirm Your Password' onChange={(e) => this.setState({password_confirmation:e.target.value})} />
                                <Button type='submit' className='btn btn-block m-2 site-btn-login'>Reset</Button>
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
};

export default ResetPassword;