import axios from 'axios';
import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import AppURL from '../../api/AppURL';
import Login from '../../assets/images/login.png';

class UserLogin extends Component {

  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
      loggedIn: false
    }
  }

  formSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post(AppURL.userLogin, data)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      this.setState({loggedIn:true});
    })
    .catch(error => {

    })

  }

  render() {

    // after successuflly logged in then redirect to user profile page
    if(this.state.loggedIn){
      return <Navigate to="/profile" />
    }

    return (
      <>
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col lg={6} md={6} sm={12} s={12}>
                            <Form onSubmit={ this.formSubmit } className="onboardForm">
                                <h4>USER SIGN IN</h4>
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Valid Email' onChange={(e) => this.setState({email:e.target.value})} />
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Your Password' onChange={(e) => this.setState({password:e.target.value})} />
                                <Button type="submit" className='btn btn-block m-2 site-btn-login'>Sign In</Button>

                                <br /><br />
                                <hr />
                                <p>Forget your password? <Link to='/forget'>Forget Password Link</Link></p>
                                <p>Don't have an account? <Link to='/register'>Create an account</Link></p>

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