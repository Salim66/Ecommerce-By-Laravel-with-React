import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import Login from '../../assets/images/login.png';
import axios from 'axios';
import AppURL from '../../api/AppURL';

export class UserRegister extends Component {

    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            message: "",
            loggedIn: false
        }
    }

    formSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        }

        axios.post(AppURL.userRegister, data)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.setState({loggedIn:true});
            this.props.setUser(res.data.user);
        })
        .catch(error => {

        })

    }
    

  render() {

    // after successuflly register, then redirect to user profile page
    if(this.state.loggedIn){
        return <Navigate to="/profile" />
    }

    return (
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col lg={6} md={6} sm={12} s={12}>
                            <Form onSubmit={ this.formSubmit } className="onboardForm">
                                <h4>USER SIGN UP</h4>
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Your Name' onChange={(e) => this.setState({name: e.target.value})} />
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Valid Email' onChange={(e) => this.setState({email: e.target.value})} />
                                <input type="text" className='form-control m-2' name="" placeholder='Enter Your Password' onChange={(e) => this.setState({password: e.target.value})} />
                                <input type="text" className='form-control m-2' name="" placeholder='Confirm Your Password' onChange={(e) => this.setState({password_confirmation: e.target.value})} />
                                <Button type="submit" className='btn btn-block m-2 site-btn-login'>Sign UP</Button>

                                <br /><br />
                                <hr />
                                <p>Forget your password? <Link to='/forget'>Forget Password Link</Link></p>
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